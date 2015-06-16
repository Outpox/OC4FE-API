var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    id: Number,
    prenom: String,
    img: {type: String, default: 'img/account-circle.svg'},
    dernierCafe: {type: Date, default: Date.now},
    sucre: {type: Boolean, default: false},
    touillette: {type: Boolean, default: false},
    vacances: {type: Boolean, default: false},
    cachee: {type: Boolean, default: false},
    cafePayes: {type: Number, default: 0},
    cafeRecus: {type: Number, default: 0}
}, {collection: 'users'});

module.exports = mongoose.model('user', userSchema, 'users');