'use strict';
const $ = require('jquery');

require('bootstrap-sass');

// Import bootstrap CSS here.
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');

// Import fontawesome CSS here.
require('font-awesome/css/font-awesome.css');

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
