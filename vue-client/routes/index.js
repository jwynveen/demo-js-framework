var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
  });
});

// About
router.get('/about', function(req, res, next) {
  res.render('about');
});

// Contact
router.get('/contact', function(req, res, next) {
  const data = {
    isPost: false,
  };
  res.render('contact', data);
});
router.post('/contact', function(req, res, next) {
  const data = {
    isPost: true,
    formData: req.body,
  }
  res.render('contact', data);
});

module.exports = router;
