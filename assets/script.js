<<<<<<< HEAD
//genius API
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://genius.p.rapidapi.com/artists/16775/songs",
=======
const clickSearch = function() {
	let inputValue = $("#songName").val()
	console.log(inputValue);
	getLyrics(inputValue);
}

//genius API

const getLyrics = function(songTitle) {
const settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://genius.p.rapidapi.com/search?q=${songTitle}`,
>>>>>>> ca4a087ff038a7df1a72cacd93af167ec3a74ceb
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "2da096b016msh4eb9721ad5715a3p16841cjsnfd3b68cc2483"
	}
};

<<<<<<< HEAD
$.ajax(settings).done(function (response) {
	console.log(response);
});

// google translate 'translate'
const settings = {
=======

$.ajax(settings).done(function (response) {
	console.log(response);
});
}

$("#search-button").on("click", clickSearch);

// google translate 'translate'
const translateSettings = {
>>>>>>> ca4a087ff038a7df1a72cacd93af167ec3a74ceb
	"async": true,
	"crossDomain": true,
	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"accept-encoding": "application/gzip",
		"x-rapidapi-host": "google-translate1.p.rapidapi.com",
		"x-rapidapi-key": "2da096b016msh4eb9721ad5715a3p16841cjsnfd3b68cc2483"
	},
	"data": {
		"q": "Hello, world!",
		"target": "es",
		"source": "en"
	}
};

<<<<<<< HEAD
$.ajax(settings).done(function (response) {
	console.log(response);
});
=======
$.ajax(translateSettings).done(function (response) {
	console.log(response);
});
	
>>>>>>> ca4a087ff038a7df1a72cacd93af167ec3a74ceb
