const Fave = require("../../models/fave")

module.exports = { generateFave, findFave }

async function generateFave(req, res) { 
    let myfave = await Fave.create(req.body)
    console.log(myfave, "created")
}

async function findFave(req, res) {
    let myfave = await Fave.findOne({key: req.body.key})
    console.log(myfave, "found")
}