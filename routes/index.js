var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANGELHACK VIETNAM HACKATHON 2019', teamName: 'Domo team' });
});

router.get('/vnpostfree/:code', function(req, res, next) {
  // const urlCode = req.params.code;
  var result = {
    'a': 1,
  };
  res.status(200).send(result);
});

module.exports = router;
