const express = require("express");
const router = express.Router();
const authServices = require('../services/auth');


router.post('/user', authServices.user);

router.post('/login', authServices.login);
router.post('/register', authServices.register);

router.post('/animeList', authServices.favorites);
router.post('/addAnime', authServices.addFavorite);
router.post('/removeAnime', authServices.removeFavorite);
router.post('/getAnime', authServices.getAnime);

module.export = router;