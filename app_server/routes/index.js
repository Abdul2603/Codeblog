// Define routes for login and signup pages
const express = require('express');
const router = express.Router();
// index page
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

// Login page
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Signup page
router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Signup' });
});
//About page
router.get('/about/', (req, res) => {
  res.render('about', { title: 'About' });
});

//Features page
router.get('/features/', (req, res) => {
  res.render('features', { title: 'features' });
});
//Problems page
router.get('/problems/', (req, res) => {
  res.render('problems', { title: 'problems' });
});
//discussions page
router.get('/discussion/', (req, res) => {
  res.render('discussion', { title: 'discussions' });
});

//problem 1
router.get('/problem1/', (req, res) => {
  res.render('problem1', { title: 'Fibonacci Series' });
});

//problem 2
router.get('/problem2/', (req, res) => {
  res.render('problem2', { title: 'Fibonacci Series using Recursion' });
});

//problem 3
router.get('/problem3/', (req, res) => {
  res.render('problem3', { title: 'Tower of Hanoi' });
});
module.exports = router;
