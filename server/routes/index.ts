import { Request, Response } from "express";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: Function) {
  res.render('index', { title: 'Express' })
});

/* GET error page. */
router.get('/error', function(req: Request, res: Response, next: Function) {
  res.render('error', { message: 'Error', error: { status: 400, stack: 'Bad request' } })
});

module.exports = router;
