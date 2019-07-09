var express = require("express");
var Request = require("request");
var router = express.Router();

router.get("/", function(req, res, next) {
    Request.get("https://reqres.in/api/users?page=2", (error, response, body) => {
    if(error) {
        res.send(JSON.parse({error:"Se presentó un error"}));
    }
    res.send(JSON.parse(body));
});
});

module.exports = router;
