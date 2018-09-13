const $ = require('jquery');
const RepLogApp = require('babel-loader!./components/RepLogApp');

// Require bootstrap so that popover() is made available.
require('bootstrap-sass');

// Expose bootstrap decorated jQuery object globally
// to support legacy code.
window.$ = $;

$(document).ready(function() {
    var $wrapper = $('.js-rep-log-table');
    var repLogApp = new RepLogApp($wrapper);
});
