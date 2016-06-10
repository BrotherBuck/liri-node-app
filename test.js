
//console.log('hello');
var request = require('request');

var url = "http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json";

request(url, function(err, response, body){
    body = JSON.parse(body);
    console.log("Frozen was released on: " + body.Released);
});


// callback

function writeSomething(array, function(text){
	console.log(text);
	} {
		console.log(array);
}

// more code

function getMovieInfo(){
	//covers scenario of no parameter typed
	if (!parameter) {
		parameter = 'mr.nobody';
	};
	//builds url for response with parameter from node request entry and include rotten tomatoes info
	var queryUrl = 'http://www.omdbapi.com/?t=' + parameter +'&y=&plot=short&r=json&tomatoes=true';
	//call request to omdb api
	request(queryUrl, function(err, response, body){
		//console logs error if one is present
		if (err) {
			console.log(err);
		} 
		//turns response into JSON object
		body = JSON.parse(body);
		//display's response in console.
		console.log('--------------------------------------------------------------');
		console.log('Title: '+ body.Title);
		console.log('Year released: '+ body.Year);
		console.log('IMDB rating: '+ body.imdbRating);
		console.log('Countries Released in: '+ body.Country);
		console.log('Languages Released in: '+ body.Language);
		console.log('Plot: '+ body.Plot);
		console.log('Actors: '+ body.Actors);
		console.log('Rotten Tomatoes Rating: '+ body.tomatoRating);
		console.log('Rotten Tomatoes URL: '+ body.tomatoURL);
		console.log('--------------------------------------------------------------');
		//writes query request and response to log.txt
		writeableObj = parameter+", "+body.Title+", "+body.Year+", "+body.imdbRating+", "+body.Country+", "+body.Language+", "+body.Plot+", "+body.Actors+", "+body.tomatoRating+", "+body.tomatoURL+"\n";

		fs.appendFile('log.txt', writeableObj, function(err){
			if (err) {
				return console.log(err);
			};
			console.log('log.txt was updated');
		});
	});
};

// more code

var search = process.arvg[2] || 'Mr. Nobdy';


//other code

var action = process.argv[2];

// uses the value entered if needed for the function

var value = process.argv[3];

// Store all of the arguments in an array

var nodeArgs = process.argv;

function goAppGo(action, value) {

    // switch to call the different functions

    switch(action) {
        case 'my-tweets': 
            myTweets();
            break;
        case 'spotify-this-song':
            spotifyThisSong();
            break;
        case 'movie-this':
            movieThis();
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
    } // end of switch

} // end of goAppGo function

var action = process.argv[2];

// uses the value entered if needed for the function

var value = process.argv[3];

// Store all of the arguments in an array

var nodeArgs = process.argv;

function goAppGo(action, value) {

    // switch to call the different functions

    switch(action) {
        case 'my-tweets': 
            myTweets();
            break;
        case 'spotify-this-song':
            spotifyThisSong();
            break;
        case 'movie-this':
            movieThis();
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
    } // end of switch

} // end of goAppGo function```

function spotifyThisSong() {

    // if user enters a value - process.argv[3]

    if (value) {

        var song = value;

    } // end of if value = true

    else {

        var song = "what's my age again";

    } // end of else value = true

    // searches spotify API based on process.argv[3]

    spotify.search({ type: 'track', query: song}, function(err, data) {

        // if there is an error

        if (err) {

            console.log('Error occurred: ' + err);
            return;

        } // end of if err

        // else console.dir song information

        else {
            console.dir(data.tracks.items[0].artists[0].name);
            console.dir(data.tracks.items[0].name);
            console.dir(data.tracks.items[0].preview_url);
            console.dir(data.tracks.items[0].album.name);

        } // end else err

    }); // end of spotify search

} // end of spotifyThisSong function

function doWhatItSays() {

    // read rand.txt and save it to 'data'

    fs.readFile("./random.txt", "utf8", function(error, data) {

        // makes an array of the data in random.txt

        var readArr = data.split(',');

        console.dir(readArr);

        // runs liri app using the data from readArr

        goAppGo(readArr[0], readArr[1]);

    }); // end of readFile

} // end of do-what-it-says function

goAppGo(action, value);


