import ko from "knockout";
import $ from "jquery";

const vm = {
    message: ko.observable('Babel does its thing')
};

ko.components.register('select-city', { require: 'city/select' });

$(document).ready(function () {
    ko.applyBindings(vm, $('main')[0]);
});



