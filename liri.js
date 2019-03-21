// require("dotenv").config();

// var spotify = new Spotify(keys.spotify);

// var keys = require("./keys.js");

var axios = require("axios");

// //create variable to store commands
let commands = process.argv[2];
let nodeArgs = process.argv[3]++;


//concert-this
//node liri.js concert-this <artist/band name here>
//creates a call to the Bands in Town Artist Events API for an artist
if (commands === "concert-this")


    //render the following information about each event to the terminal:
    // Name of the venue
    // Venue location
    // Date of the Event (use moment to format this as "MM/DD/YYYY")





    //spotify-this-song
    //node liri.js spotify-this-song '<song name here>'
    //If no song is provided then your program will default to "The Sign" by Ace of Base.
    //utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
    // if (commands === "spotify-this-song")

    //movie-this
    //node liri.js movie-this '<movie name here>'
    var movieName = "";

for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];

    }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

if (commands === "movie-this") {
    axios
        .get(queryUrl)
        .then(function (response) {
            // If the axios was successful...
            // Then log the body from the site!
            console.log(response.data);
        })

        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
//use the axios package to retrieve data from the OMDB API.
//   * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.



//do-what-it-says
//node liri.js do-what-it-says
//Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// if (commands === "do-what-it-says")













// Spotify API Keys
//Client ID: 1751f509c2424c6a9dc7c669a07f3621
//Client Secret: e2d403e093444d109f3cb1c4a833ca9b


// IMDB API
// http://www.omdbapi.com/?apikey=[yourkey]&

// Bands in town API
// https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp