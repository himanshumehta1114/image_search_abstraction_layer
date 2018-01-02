const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request');
const search = require('./search.js');

app.get('/:keyword', (req,res) => {
    var keyword = req.params.keyword;
    var count = req.query.count;
    var url = `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${keyword}&count=${count}`
    search.getResults(url, (errorMsg, results) => {
        if(errorMsg){
            res.send(errorMsg);
        }else if(results){
            res.send(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is up on port : ${port}`);
})
