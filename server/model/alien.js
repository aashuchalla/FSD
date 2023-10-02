const mongoose = require('mongoose') //Translate the code and its representation from MongoDB to the Node.js server
const alienSchema = new mongoose.Schema //alienschema is an object which consists the schema i.e. table
({
    name://name,tech,sub are the attributes of schema alienSchema
    {
        type: String, //mongoose helps in write more custom code
        required: true
    },
    tech:
    {
        type: String,
        required: true
    },
    sub:
    {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('Alien',alienSchema)//export the alienschema Schema in the name of Alien