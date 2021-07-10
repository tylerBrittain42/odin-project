const System = require('../models/system');

exports.system_list = (req, res) => {

    System.find({}, 'name')
        .exec((e, list_systems) => {
            if(e) { res.json({'error':e})}
            console.log(list_systems)
            res.render('system_list', {inventory:list_systems})
        })

}

exports.system_detail = (req, res) => {
    System.findById(req.params.id)
        .exec((e, system_details) => {
            if(e) { res.json({'error':e})}
            console.log(system_details)
            res.render('system_detail', {system:system_details})
        })
}

exports.system_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.system_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.system_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.system_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.system_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.system_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED')
}