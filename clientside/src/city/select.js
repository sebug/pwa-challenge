import ko from "knockout";
import htmlString from 'text!./select.html';

class SelectCity {
    constructor(params) {
	this.cityName = ko.observable('');
    }

    search() {
	let response = await fetch('/api/SearchBoxesTrigger?city=' + this.cityName());
	alert('Search results ' + response.json());
    }
}

export {
    SelectCity as viewModel,
    htmlString as template
};
