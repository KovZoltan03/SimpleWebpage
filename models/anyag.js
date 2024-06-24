const Schema = require('mongoose').Schema
const db = require('../config/db')

const Anyag = db.model('Anyag', {
    anyagnev: String,
    anyagmennyiseg: Number,
    anyaghely: String,
    anyagfelhter: String,
    _epitkezes: {
        type: Schema.Types.ObjectId,
        ref: 'Megrendeles'
    }
})

module.exports = Anyag