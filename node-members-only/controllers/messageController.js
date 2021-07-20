exports.feed = function(req, res) {
    res.render('feed')
}

exports.get_compose = function(req, res) {
    res.render('compose')
}


exports.post_compose = function(req, res) {
    res.send('<h1>post request recieved</h1>')
}
