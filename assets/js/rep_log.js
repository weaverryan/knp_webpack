const $ = require('jquery');
const RepLogApp = require('babel-loader!./components/RepLogApp');

// Require bootstrap so that popover() is made available.
require('bootstrap-sass');

// Expose bootstrap decorated jQuery object globally
// to support legacy code.
// GOTCHA: ProvidePlugin will rewrite any of you own code that tries to
// expose jQuery globally via `window.$ = $` if
// `'window.jQuery': 'jquery'` is set in options.
// Use `global.$ = $` instead.
// window.$ = $; // THIS WILL BREAK
global.$ = $;

$(document).ready(function() {
    var $wrapper = $('.js-rep-log-table');
    var repLogApp = new RepLogApp($wrapper);
});
