var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var pcpart = require("../models/pcparts.js");


router.get("/", function(req, res){
    pcpart.all(function(data){
        var hbsObject = {
            pcparts: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/pcparts", function(req, res) {
    pcpart.create([
        "name", "pcpart"
    ], [
        req.body.name, req.body.pcpart
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/pcparts/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    pcpart.update({
        pcpart: req.body.pcpart
    }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;