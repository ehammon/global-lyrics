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

// var songName = document.getElementsByName("#songName").options.length;

var searchBtn = $("#searchBtn");
(searchBtn).on("click", function () {
	console.log("I have been clicked"); 
	var songName = $("#songName");
	console.log(songName.val());
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://genius.p.rapidapi.com/search?q="+songName.val(),
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "genius.p.rapidapi.com",
			"x-rapidapi-key": "2da096b016msh4eb9721ad5715a3p16841cjsnfd3b68cc2483"
		}
	};
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
})

var transBtn = $("#transBtn");
(transBtn).on("click", function () {
	console.log("translated");
	var translateSong = $("#translateSong");
	console.log(translateSong.val());
})

$("#transModal").foundation("toggle");

$('#transModal').foundation('open');
$('#transModal').foundation('close');


const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
	modal.classList.toggle("show-modal");
}

function windowOnCLick(event) {
	if (event,target.toggle === modal) {
		toggleModal();
	}
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnCLick);