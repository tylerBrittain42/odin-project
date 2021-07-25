const Entry = require('../models/entry')

exports.all_entries = function(req, res) {

    Entry.find()
    .exec(function (e, entries){
        res.json(entries)
    })
}

exports.add_entry = async function(req, res) {

    const entryTitle = req.query.title
    const entryBody = req.query.body

    const newEntry = await new Entry({title:entryTitle, body:entryBody})
    newEntry.save(function (e) {
        if(e) { res.status(400).send('Bad Request') }
        else { res.sendStatus(200) }
    })
}

exports.clear_blog = function(req, res) {

    Entry.deleteMany({}, (e) => {
        if(e) { res.status(400).send('Bad Request') }
        else { res.sendStatus(200) }
    })
}

exports.get_post = function(req, res) {
    
    const entryID = req.params.messageID
    
    Entry.findById(entryID)
    .exec((e, entry) => {
        if(e) { res.status(400).send('Bad Request') } 
        else { res.json(entry) }
    })   
}

exports.delete_entry = function(req, res) {
    
    const entryID = req.params.messageID
    
    Entry.findByIdAndDelete(entryID)
    .exec((e) => {
        if(e) { res.status(400).send('Bad Request') } 
        else { res.sendStatus(200) }
    })    
}