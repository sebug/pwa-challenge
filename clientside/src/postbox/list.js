import ko from "knockout";
import htmlString from 'text!./list.html';

class PostboxList {
    constructor(params) {
	this.postBoxList = params.postBoxList;
	if (typeof this.postBoxList !== 'function') {
	    this.postBoxList = ko.observableArray(this.postBoxList);
	}
	this.selectedPostbox = ko.observable();
    }

    selectPostbox(postbox) {
	this.selectedPostbox(postbox);
    }
}

export {
    PostboxList as viewModel,
    htmlString as template
};
