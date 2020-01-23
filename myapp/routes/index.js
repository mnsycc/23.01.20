var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/123', function(req, res, next) {
  console.log('ROCKPRIVET');
  res.render('index');
});
router.get('/123:321?', function userIdHandler (req, res) {
  let arr = [];
  arr.push(req.route);
  res.send('GOT IT');
  console.log(arr);
})
router.get('/111', function(req,res,next) {
  console.log('PLIVETOS');
  res.render('hi');
});

module.exports = router;
