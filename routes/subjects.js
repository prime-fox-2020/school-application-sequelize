'use strict';
const routes = require('express').Router();
const SubjectsController = require('../controllers/SubjectsController');

routes.get('/', SubjectsController.showList);
routes.get('/:id', SubjectsController.showListByID);

module.exports = routes;