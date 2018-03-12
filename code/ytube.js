var request = require("request");
var cheerio = require("cheerio");

var target = "https://www.youtube.com/results?search_query=boca+juniors";

request(target, function(err, resp, body) {
   var txt = "";
   
   if (err) console.log("Error: " + err);
   else {
      var $ = cheerio.load(body);
      var data = $('.yt-lockup-dismissable');
      data.each(function(){
         var cont = $(this).find('.yt-lockup-content');
         var title = cont.find('.yt-lockup-title a').text();
         var dur = cont.find('.yt-lockup-title span').text();
         var desc = cont.find('.yt-lockup-description').text();
         
         var img = $(this).find('.yt-lockup-thumbnail img').attr('src');
         
         var item = {
            title:title,
            dur:dur,
            desc:desc,
            img:img
         };
         
         console.log(item);
      });
      
      
      // $('#content .yt-shelf-grid-item').filter(function(){
      //    var x = this; 
      // });
   }
});
