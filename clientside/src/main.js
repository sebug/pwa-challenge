import ko from "knockout";
import $ from "jquery";

const vm = {
    message: ko.observable('Babel does its thing')
};

$(document).ready(function () {
    ko.applyBindings(vm, $('main')[0]);
});



