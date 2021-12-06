const express = require("express");
const router = express.Router();



router.post("/login", (req, res) => {
    const { name } = req.body;
    if (name) {
        res.status(200).send(`Welcome ${name}`)
    } else {
        res.status(401).send("Provide Name Please")
    }
    res.send("Posted")
})

module.exports = router