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
  const newMessage = req.body
  messages.push({text:newMessage.contents, user:newMessage.author, added: new Date()})
  res.redirect('/')
})


module.exports = router;
