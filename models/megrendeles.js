const Schema = require('mongoose').Schema
const db = require('../config/db')

const Megrendeles = db.model('Megrendeles', {
    megrendelonev: String,
    atadasido: Date,
    kivitar: Number,
    kifizetve: Boolean
})

module.exports = Megrendeles