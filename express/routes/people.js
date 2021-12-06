const express = require("express");

const router = express.Router();

const { getPeople, createPerson, deletePerson, updatePerson } = require("../controllers/people")

//router.get("/", getPeople);
//router.post("/", createPerson);

//router.put("/:id", updatePerson);

//router.delete("/:id", deletePerson);

router.route("/").get() getPeople);
router.route("/", createPerson);

router.route("/:id", updatePerson);
module.exports = router
router.route("/:id", deletePerson);

