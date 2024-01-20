const Fave = require("../../models/fave")

module.exports = { generateFave, findFave }

async function generateFave(req, res) { 
    let myfave = await Fave.create(req.body)
    console.log(myfave, "created")
}

https://dev.to/mccauley/accepting-data-from-a-form-and-saving-it-to-mongodb-through-mongoose-47i3