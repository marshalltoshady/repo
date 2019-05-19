/* this file is starting a server, handle session and parser request url
 * direct to router
 *
 * input: request url
 * output: router
 *
 * @author Mengyu LYU, 11st, MAY, 2018
 */

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var cookie = require('cookie-parser');

