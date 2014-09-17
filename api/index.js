#!/usr/bin/env node

var express = require('express')
var app = express()

app.post('/getToken', function (req, res) {
  res.json({ token: 'QWERTY' })
})

app.listen(3000)