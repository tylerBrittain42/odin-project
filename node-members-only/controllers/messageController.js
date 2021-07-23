const Message = require('../models/message')

// Loads the feed with the messages stored as an array.
// MUST be async to ensure that the message_list is loaded before the view is rendered
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
        author:req.user.username
    })

    message.save((e) => {
        if(e) { res.redirect('/') }
        else{
            console.log('Compose Success!')
            res.redirect('../../')
        }})
}
