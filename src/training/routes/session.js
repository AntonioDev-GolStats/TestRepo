'use strict'

const express = require('express');

const SessionController = require('../controllers/session');

api.get('/getSession', SessionController.getSession);
api.post('/postSession', SessionController.postSession);

api.put('/putSession', SessionController.putSession);

module.exports = api;