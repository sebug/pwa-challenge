import ko from "knockout";
import htmlString from "text!./view.html";

class PostboxView {
    constructor(params) {
	this.postbox = params.postbox;
	if (typeof this.postbox !== 'function') {
	    this.postbox = ko.observable(this.postbox);
	}
    }
}

export {
    PostboxView as viewModel,
    htmlString as template
};
