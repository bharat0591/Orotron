const express = require('express')
const { insertItem } = require('./db')
var pdf = require('html-pdf');
var fs = require('fs');

const router = express.Router()


router.post('/add', (req, res) => {
  const item = req.body
  insertItem(item)
    .then(() => {
      pdf.create(item.html).toStream(function(err, stream){
        stream.pipe(fs.createWriteStream('./html-pdf.pdf'));
      });
      const file = `${__dirname}/html-pdf.pdf`;
      res.download(file);
    })
    .catch((err) => {
      res.status(500).end()
    })
});

module.exports = router
