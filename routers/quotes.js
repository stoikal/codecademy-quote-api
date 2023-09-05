const express = require('express');
const { quotes } = require('../data');
const { getRandomElement } = require('../utils');

const router = express.Router()

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

router.post('/', (req, res) => {
  const { quote, person } = req.query

  if (quote && person) {
    const newQuote = { quote, person }
  
    quotes.push(newQuote)
    res.status(201).send({ quote: newQuote })
  } else {
    res.status(400).send('invalid data')
  }
})

router.get('/random', (req, res) => {
  res.send({
    quote: getRandomElement(quotes)
  })
})

module.exports = router