import ko from "knockout";
import $ from "jquery";

const vm = {
};

ko.components.register('postbox-list', { require: 'postbox/list' });
ko.components.register('select-city', { require: 'city/select' });

$(document).ready(function () {
    ko.applyBindings(vm, $('main')[0]);
});



