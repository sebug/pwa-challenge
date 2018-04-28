import ko from "knockout";
import htmlString from 'text!./select.html';

class SelectCity {
    constructor(params) {
	this.message = 'City selector';
    }
}

export {
    SelectCity as viewModel,
    htmlString as template
};
