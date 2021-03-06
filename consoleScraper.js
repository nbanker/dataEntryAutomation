//For scraping two websites on wikipedia into one console json file
//This function requires tabletojson v2 npm package
const tableToJson = require('tabletojson').Tabletojson;
function consoleScraper() {
	//if required add additional website in the array
	const wikiConsoleScrape = [
		'https://en.wikipedia.org/wiki/List_of_home_video_game_consoles',
		'https://en.wikipedia.org/wiki/List_of_handheld_game_consoles'
	];

	let consoles = [];

	wikiConsoleScrape.forEach((url) => {
		tableToJson.convertUrl(url, { useFirstRowForHeadings: true }, function(tablesAsJson) {
			tablesAsJson.shift();
			consoles.push(tablesAsJson);
		});
	});
	return consoles;
}

module.exports = consoleScraper;
