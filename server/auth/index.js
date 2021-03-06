const passport = require('passport')
const express = require('express')
require('../passport/google')

const router = express.Router()

router.get('/google',
  passport.authenticate('google', { scope: ['profile','email']}));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router