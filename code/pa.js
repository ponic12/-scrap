var request = require("request");
var cheerio = require("cheerio");

// var target = "http://www.paginasamarillas.com.ar/buscar/buenos-aires/r/restaurantes/";
var target = "https://buenos-aires.restorando.com.ar/restaurantes?redomkt_source=google&redomkt_medium=CPC&redomkt_google_network=g&redomkt_keyword=restaurantes%20buenos%20aires&redomkt_matchtype=e&redomkt_placement=%20&redomkt_adposition=1t1&redomkt_creative=161272123564&gclid=Cj0KEQiA-_HDBRD2lomhoufc1JkBEiQA0TVMmow5lEYGaf_dilL-Qc7SQXd3AZORel_LDOG_L2rQZCgaAkLt8P8HAQ";

request(target, function(err, resp, body) {
   
   if (err || resp.statusCode != 200) console.log("StatCode: "+ resp.statusCode + ". Error: " + err);
   else {
      var $ = cheerio.load(body);
      var data = $('.restaurant');
      data.each(function(){
         var img = $(this).find('.restaurant-image img').attr('src');
         var name = $(this).find('.restaurant-text h4 a').text();
         
         var item = {
            name:name,
            img:img
         };
         
         console.log(item);
      });
      
      
      // $('#content .yt-shelf-grid-item').filter(function(){
      //    var x = this; 
      // });
   }
});
