const express = require('express')
const router = express.Router()

/* adding line */

/* Adding an intentional vulnerability */
router.get('/unsafe', function (req, res, next) {
  const userInput = req.query.input; 
  eval(userInput); // Security issue: Arbitrary code execution
  res.send('Executed input!');
});


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Nimble-ICE' })
})

/* GET ice-flakes resource */
router.get('/ice-flakes', function (req, res, next) {
  res
    .status(201)
    .json({
      resource: 'ice-flakes',
      count: 1005,
      shape: 'rectangle'
    })
})

module.exports = router
