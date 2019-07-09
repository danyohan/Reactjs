var express = require("express");
var Request = require("request");
var url = require('url');
var router = express.Router();

/*var url_parts = url.parse(request.url, true);
var query = url_parts.query;*/
router.get("/", function(req, res, next) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

    Request.get("https://reqres.in/api/user/"+ query.id, (error, response, body) => {
      if(error) {
        res.send(JSON.parse({error:"Se presentó un error"}));
      }
    res.send(JSON.parse(body));
});
});

module.exports = router;
