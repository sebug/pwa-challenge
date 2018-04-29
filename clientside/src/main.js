import ko from "knockout";
import $ from "jquery";

const vm = {
};

ko.components.register('postbox-view', { require: 'postbox/view' });
ko.components.register('postbox-list', { require: 'postbox/list' });
ko.components.register('select-city', { require: 'city/select' });

$(document).ready(function () {
    if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').then(function (registration) {
	    console.log('ServiceWorker registration successful with scope: ', registration.scope);
	}, function (err) {
	    console.log('ServiceWorker registration failed: ', err);
	});
    }
    
    ko.applyBindings(vm, $('main')[0]);
});



