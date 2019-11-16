var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root:  'public' });
});
var teams = "https://www.balldontlie.io/api/v1/teams";
router.get('/getteams',function(req, res, next) {
    console.log("in get team route");
    request(teams).pipe(res);
});

module.exports = router;
