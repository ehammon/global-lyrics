


const clickSearch = function() {
	let inputValue = $("#songName").val()
	window.localStorage.setItem('Song', inputValue, JSON.stringify());
	for(var i = 0; i < inputValue.length; i++){
		inputValue.push(inputValue[i]);
	}
	localStorage.setItem("Song", JSON.stringify(inputValue));
}

//genius API

const getLyrics = function(songTitle) {
const settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://genius.p.rapidapi.com/search?q=${songTitle}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "2da096b016msh4eb9721ad5715a3p16841cjsnfd3b68cc2483"
	}
};


$.ajax(settings).done(function (response) {
	console.log(response);
});
}

$("#search-button").on("click", clickSearch);

// google translate 'translate'
const translateSettings = {
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

$.ajax(translateSettings).done(function (response) {
	console.log(response);
});



