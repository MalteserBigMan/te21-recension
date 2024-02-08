const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
    //   const [part] = await pool.promise().query('SELECT * FROM malte_part where id = ' + id)

    const movies = [
        {
            "title": "Ursus",
            "score": "4.5⭐"
        },
        {
            "title": "Malets äventyr",
            "score": "9.7⭐"
        },
        {
            "title": "Keros Kast",
            "score": "9.2⭐"
        },
        {
            "title": "Samuels Sugeri",
            "score": "10⭐"
        }
    ]
      res.render('index.njk', { title: "MMDB", movies})  
    } catch (error) {
        console.log(error)
    }

})


module.exports = router