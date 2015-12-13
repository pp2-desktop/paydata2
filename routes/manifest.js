var express = require('express');
var router = express.Router();

router.get('/project', function(req, res) {

  res.setHeader('Content-type', 'application/json');
  res.download('/home/pp/workspace/paydata2/public/project.manifest');

});

router.get('/ver', function(req, res) {

  res.setHeader('Content-type', 'application/json');
  res.download('/home/pp/workspace/paydata2/public/version.manifest');

});

module.exports = router;
