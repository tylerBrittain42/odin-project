const messages = [
  {
    text: "Hello",
    user: "Chuck",
    added: new Date()
  },
  {
    text: "Hola",
    user: "Chris",
    added: new Date()
  },
  
]

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Mini MessageBoard', messages: messages  });
});

router.post('/', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})


module.exports = router;
