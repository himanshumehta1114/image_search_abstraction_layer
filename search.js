var request = require('request');

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

module.exports = {
    getResults
}
