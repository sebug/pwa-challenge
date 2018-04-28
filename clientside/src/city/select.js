import ko from "knockout";
import htmlString from 'text!./select.html';

class SelectCity {
    constructor(params) {
	this.cityName = ko.observable('');
	this.postBoxes = ko.observableArray([]);
    }

    async searchBoxes(cityName) {
	let response = await fetch('/api/SearchBoxesTrigger?city=' + cityName);
	let boxList = await response.json();
	console.log(boxList);
	this.postBoxes(boxList || []);
    }

    search() {
	this.searchBoxes(this.cityName());
    }
}

export {
    SelectCity as viewModel,
    htmlString as template
};
