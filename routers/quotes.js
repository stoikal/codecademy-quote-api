const express = require('express');
const { quotes } = require('../data');
const { getRandomElement } = require('../utils');

const router = express.Router()

router.get('/random', (req, res) => {
  res.send({
    quote: getRandomElement(quotes)
  })
})

router.get('/', (req, res) => {
  const { person } = req.query

  if (person) {
    res.send({
      quotes: quotes.filter(quote => quote.person === person)
    })
  } else {
    res.send({ quotes })
  }
})

module.exports = router