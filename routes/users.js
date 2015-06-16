var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var users = require('../models/user.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    users.find(function (err, users) {
        if (err) return next(err);
        res.json(users);
    });
});

router.get('/:id', function (req, res, next) {
    users.find({'id': req.params.id}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
router.post('/', function (req, res, next) {
    users.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function (req, res, next) {
    users.findOne({'id': req.params.id}, function (err, user) {
        if (err) res.json({message: 'NOK'});
        for (var prop in req.body) {
            user[prop] = req.body[prop];
        }
        user.save(function (err) {
            if (err) res.send(err);
            res.json({message: 'OK'});
        });
    });
});

module.exports = router;
