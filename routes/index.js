const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
      const [part] = await pool.promise().query('SELECT * FROM malte_part where id = ' + id)
      res.render('index.njk', { title: part[0].text, href:   "http://localhost:3000/" + (id + 1) })  
    } catch (error) {
        console.log(error)
    }

})


module.exports = router