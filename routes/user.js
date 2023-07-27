const express = require('express');
const router = express.Router()
const {loginPage ,dashBoard, loginProcess} =require('../controller/userController')

router.get('/', loginPage);
router.get('/dashboard',dashBoard)
router.post('/login',loginProcess)

module.exports = router;