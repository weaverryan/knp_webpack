'use strict';
const $ = require('jquery');
require('popper.js');
require('bootstrap');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
