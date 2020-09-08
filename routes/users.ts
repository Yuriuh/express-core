import { RequestHandler } from 'express'

const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('get users')
} as RequestHandler)

router.get('/xxx', function (req, res, next) {
  res.send('get users xxx')
} as RequestHandler)

module.exports = router
