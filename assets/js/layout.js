'use strict';
const $ = require('jquery');

require('bootstrap-sass');

// Add babel polyfill on every page to ensure we can
// use Promise.
require('@babel/polyfill');

const css = require('../css/login.css');
console.log(css);

// Import global CSS here.
require('../css/main.scss');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
