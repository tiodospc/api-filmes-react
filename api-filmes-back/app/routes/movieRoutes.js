const express = require("express")
const router = express.Router();

const MovieController = require('../controllers/moviesController')

router.get('/api/movies/count', MovieController.filterMovies)

module.exports = app => app.use(router)