const Message = require('../models/message')


exports.feed = function(req, res) {
    res.render('feed')
}

exports.get_compose = function(req, res) {
    res.render('compose')
}


exports.post_compose = function(req, res) {
    const message = new Message(
    {
        title:req.body.entryTitle,
        body:req.body.entryBody,
        author:'Jimmy for Now'
    })

    message.save((e) => {
        if(e) {res.json({'error':e})}
        else{
            console.log('Compose Success!')
            res.redirect('../../')
        }
    })
}
