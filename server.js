const express = require('express');
const quotesRouter = require('./routers/quotes');

const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use('/api/quotes', quotesRouter)

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
