const express = require ('express')
const { moviesMock } = require('../utils/mocks/movies')

function moviesApi(app) {
  const router = express.Router()
  app.use('/api/movies', router)

  router.get('/', async function(req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock)

      res.status(200).json({
        data: movies,
        message: 'Movies listed'
      })
    } catch (err) {
      next(err)
    }
  })

  // Read
  router.get('/:movieId', async function(req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock[0])

      res.status(200).json({
        data: movies,
        message: 'Movies retrieved'
      })
    } catch (err) {
      next(err)
    }
  })

  // Create
  router.post('/', async function(req, res, next) {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(201).json({
        data: createMovieId,
        message: 'Movie created'
      })
    } catch (err) {
      next(err)
    }
  })

  // Update
  router.put('/:movieId', async function(req, res, next) {
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(200).json({
        data: updatedMovieId,
        message: 'Movies updated'
      })
    } catch (err) {
      next(err)
    }
  })
  
  // Delete
  router.delete('/:movieId', async function(req, res, next) {
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(200).json({
        data: deletedMovieId,
        message: 'Movies deleted'
      })
    } catch (err) {
      next(err)
    }
  })
  
}

module.exports = moviesApi