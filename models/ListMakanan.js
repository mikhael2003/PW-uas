// (4) Buat Schema Makanan
const mongoose = require('mongoose')

const ListMakananSchema = mongoose.Schema({
    // Buat Schema data
    nama_makanan: {
        type: String,
        required: true
    },
    deskripsi_makanan: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ListMakanan', ListMakananSchema)