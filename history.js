const mongoose = require('mongoose');
const moment = require('moment');
var dbConnect = 'mongodb://root:1234@ds237947.mlab.com:37947/image-search-fcc';

mongoose.connect(dbConnect, {useMongoClient : true});

var historyModel = mongoose.model('history', {
    'keyword' : {
        type : String
    },
    'time' : {
        type: String
    }
});

var saveKeyword = function(req,res,callback){
    var time = new Date();
    var normalTime = moment(time).format("hh:mm");

    var keyword = new historyModel({
        keyword : req.params.keyword,
        time : normalTime
    });
    console.log('inside save block');

    keyword.save().then((result) => {
            callback(undefined,console.log(result));
        }
    );
};

var getAll = function(callback){
    historyModel.find({}, function(err, keywords){
        if(err){
            callback('unable to fetch latest search history');
        }else{
            var keywordArr = [];
            for(var i=0;i<keywords.length;i++){
                var eachKeyword = {
                    'term' : keywords[i].keyword,
                    'time' : keywords[i].time
                };
                keywordArr[i] = eachKeyword;
            }
            callback(undefined,keywordArr.reverse());
        }
    })
}

module.exports = {saveKeyword,getAll};
