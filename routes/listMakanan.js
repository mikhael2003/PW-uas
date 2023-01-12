// (5) Buat router Mahasiswa
const express = require('express')
const ListMakanan = require('../models/ListMakanan')
const router = express.Router()


// Create 
router.post('/', async (req, res) => {
    // tampung input makanan 
    const listMakananPost = new ListMakanan({
        nama_makanan: req.body.nama_makanan,
        deskripsi_makanan: req.body.deskripsi_makanan
    })

    try {
        // simpan data 
        const listMakanan = await listMakananPost.save()
        // response
        res.json(listMakanan)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Read
router.get('/', async (req, res) => {
    try {
        const listMakanan = await listMakanan.find()
        res.json(listMakanan)
    } catch (error) {
        res.json({
            message: error
        })
    }
})


// Update 
router.put('/:listMakananId', async (req, res) => {
    // tampung input mahasiswa 
    const data = {
        nama_makanan: req.body.nama_makanan,
        deskripsi_makanan: req.body.deskripsi_makanan
    }

    try {
        // update data 
        const listMakanan = await ListMakanan.updateOne({
            _id: req.params.listMakananId
        }, data)
        // response
        res.json(listMakanan)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Delete 
router.delete('/:listMakananId', async (req, res) => {
    try {
        // delete data 
        const listMakanan = await ListMakanan.deleteOne({
            _id: req.params.listMakananId
        })
        // response
        res.json(listMakanan)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router