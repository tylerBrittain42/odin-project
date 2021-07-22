const Message = require('../models/message')


exports.feed = async function(req, res) {
    const message_list = await Message.find(function (e, results) {
        return results
    })
    res.render('feed', {message_list:message_list, user: req.user})
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
