let {people} = require("../data")

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}


const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person => person.id === Number(id)))

    if (!person) {
        return res 
            .status(404)
            .json({success: false, message: `No Person with id: ${id}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
    })
    res.status(200).json({success: true, data: newPeople})
}

const createPerson = (req, res) => {
    const {name}  = req.body
    console.log(name);
    res.status(201).send({success: true, data: name})
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if (!person) {
    return res 
        .status(404)
        .json({success: false, message: `No Person with id: ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})

}

module.exports = {
	getPeople,
	createPerson,
	updatePerson,
	deletePerson,
}