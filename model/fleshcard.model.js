const { Schema, model } = require("mongoose");

const felshSchema=Schema({
    title:String,
    description:String,
    diagram:String,
    EntertermOne:String,
    EntertermOneDefinition:String,
    EntertermTwo:String,
    EntertermTwoDefinition:String,
    userID:String,
    username:String

})

const FleshcardModel=model("fleshcar",felshSchema)

module.exports={FleshcardModel}