const express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const request = require('request');

app.get('/:keyword', (req,res) => {
    var keyword = req.params.keyword;
    var count = req.query.count;
    var url = `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${keyword}&count=${count}`
    getResults(url, (errorMsg, results) => {
        if(errorMsg){
            res.send(errorMsg);
        }else if(results){
            res.send(results);
        }
    });
});

var getResults = function(url, callback){
    request({
        uri : url,
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key' : '4176406cc37c4c748989a342c15b519d'
        }
    }, (err, response, body) => {
        if(err){
            callback('Unable to get search results');
        }
        else{
            var results = JSON.parse(body);
            var resultArr = [];
            for(var i=0;i<results.value.length;i++){
                var currSearch = {
                    name : results.value[i].name,
                    thumbnail : results.value[i].thumbnailUrl,
                    url : results.value[i].contentUrl,
                    context : results.value[i].hostPageUrl
                }
                // console.log(currSearch);
                resultArr.push(currSearch);
            }
            callback(undefined,resultArr);
        }
    })
}

app.listen(port, () => {
    console.log(`Server is up on port : ${port}`);
})
