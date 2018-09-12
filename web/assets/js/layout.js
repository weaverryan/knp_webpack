'use strict';
const $ = require('jquery');
require('popper.js');
require('bootstrap');

// Add babel polyfill on every page to ensure we can
// use Promise.
require('@babel/polyfill');

const css = require('../css/login.css');
console.log(css);

// Import global CSS here.
require('../css/main.css');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
