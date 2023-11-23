const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));


router.get("/", (req, res) => {
    knex("projects")
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json({
                message: `There was an error getting projects data`,
                error: err,
            });
        });
});

module.exports = router;