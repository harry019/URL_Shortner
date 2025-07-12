const express = require('express')
const {handleGenNewUrl, handleGetAnalytics} = require('../controllers/url')
const router = express.Router()

router.post('/', handleGenNewUrl)

router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router