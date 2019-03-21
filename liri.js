require("dotenv").config();


const keys = require("./keys.js");

const Spotify = require('node-spotify-api');

const moment = require('moment');

const fs = require('fs');


const axios = require("axios");

//create constant to store commands
const commands = process.argv[2];


//create variable for search terms


//movie-this
//node liri.js movie-this '<movie name here>'


if (commands === "movie-this") {
    //use the axios package to retrieve data from the OMDB API.
    const term = process.argv.slice(3).join(" ") || "Mr.Nobody";

    const queryUrl = "http://www.omdbapi.com/?t=" + term + "&apikey=trilogy";

    axios
        .get(queryUrl)
        .then(function (response) {
            // If the axios was successful...
            // Then log the body from the site!
            //   * Title of the movie.
            // * Year the movie came out.
            // * IMDB Rating of the movie.
            // * Rotten Tomatoes Rating of the movie.
            // * Country where the movie was produced.
            // * Language of the movie.
            // * Plot of the movie.
            // * Actors in the movie.
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
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



//concert-this
//node liri.js concert-this <artist/band name here>
//creates a call to the Bands in Town Artist Events API for an artist
if (commands === "concert-this") {
    const artist = process.argv.slice(3).join(" ") || "Bradd Pitt";

    const queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

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

//render the following information about each event to the terminal:
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")





//spotify-this-song
//node liri.js spotify-this-song '<song name here>'
//If no song is provided then your program will default to "The Sign" by Ace of Base.
//utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
if (commands === "spotify-this-song") {

    const term = process.argv.slice(3).join(" ") || "The Sign";

    var spotify = new Spotify(keys.spotify);
       
      spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
}
// Spotify API Keys
//Client ID: 
//Client Secret: 


//do-what-it-says
//node liri.js do-what-it-says
//Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
if (commands === "do-what-it-says") {

    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
      
        // We will then print the contents of data
        console.log(data);
      
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
      
        // We will then re-display the content as an array for later use.
        console.log(dataArr);
      
      });

}