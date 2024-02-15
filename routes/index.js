const express = require('express')
const router = express.Router()
const pool = require('../db')



router.get('/', function (req, res){
    res.render('index.njk', {
        title: 'MMDB'
    })
})

router.get('/movies/:id', async function (req, res) {
    console.log(req.params.id)
    const [movie] = await pool.promise().query(`select * from malte_movie 
        JOIN malte_score ON malte_movie.id = malte_score.movie_id
        WHERE malte_movie.id = ${req.params.id}`)

        console.log(movie)
    res.render('movie.njk', { 
      title: 'MMDB',
      message: 'Välkommen till min movie database',
      movie: movie[0]
    })
  })

router.get('/movies', async (req, res) => {
    try {
       const [movies] = await pool.promise().query('select * from malte_movie JOIN malte_score on malte_movie.id = malte_score.movie_id')
       //const [score] = await pool.promise().query('select * from malte_score')

/*     const movies = [
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
    ]*/
    //res.json(movies, score)
      res.render('index.njk', { title: "MMDB", movies})  
    } catch (error) {
        console.log(error)
    }

})


module.exports = router