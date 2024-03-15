const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

// create a model or a convention 
const Contact = new model("Contact", contactSchema);

module.exports = Contact;