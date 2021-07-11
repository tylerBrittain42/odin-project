const System = require('../models/system');

const { body,validationResult } = require('express-validator');


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
    res.render('system_form')
}

exports.system_create_post = [


    body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('price', 'Price must not be empty.').trim().isLength({ min: 1 }).escape(),

    (req, res, next) => {
        
        const errors = validationResult(req);

        const system = new System ( 
            {
                name: req.body.name,
                price: req.body.price
            }
        )

        if (!errors.isEmpty()) { res.render('system_form') }
        else{
            system.save((e) => {
                if(e) { return next(e)}
                res.redirect(system.url)
            })
        }
    }
]
    

exports.system_delete_get = (req, res) => {
    System.findById(req.params.id)
    .exec((e, system_details) => {
        if(e) {return e}
        res.render('system_delete', {system: system_details})
    })
}

exports.system_delete_post = (req, res) => {
    System.findByIdAndRemove(req.body.id.substring(0,req.body.id.length - 1 ), function deleteSystems(e) {
        if(e) { return({'error':e})}
        res.redirect('../../../catalog/Systems')
    })
}