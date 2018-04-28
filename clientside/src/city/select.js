import ko from "knockout";
import htmlString from 'text!./select.html';

class SelectCity {
    constructor(params) {
	this.cityName = ko.observable('');
    }

    async searchBoxes(cityName) {
	let response = await fetch('/api/SearchBoxesTrigger?city=' + cityName);
	let boxList = await response.json();
	alert('Search results ' + boxList);
    }

    search() {
	this.searchBoxes(this.cityName());
    }
}

export {
    SelectCity as viewModel,
    htmlString as template
};
