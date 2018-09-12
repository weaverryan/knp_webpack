'use strict';
const $ = require('jquery');
require('popper.js');
require('bootstrap');

// Add babel polyfill on every page to ensure we can
// use Promise.
require('@babel/polyfill');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
