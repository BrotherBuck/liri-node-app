
/*Make a JavaScript file named liri.js
At the top of the liri.js file make it so you grab the data from
keys.js and store it into a variable to use
Make it so liri.js can take in one of the following arguments
my-tweets*/

var fs = require('fs');

if (process.argv[2] === 'my-tweets') {

var Twitter = require('twitter');
var keys = require('./keys.js');


var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,
});


/**/
 
var params = {screen_name: '@jtdartworks'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

/*

spotify-this-song

movie-this

do-what-it-says

*/