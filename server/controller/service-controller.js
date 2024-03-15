const Service = require("../models/service-model");

const services = async (req,res) => {
    try {
        const response = await Service.find();
        if (!response) {
            res.status(404).send({ service_error: "No such service" });
        }
        res.status(200).json({ message: response })

    } catch (error) {
        console.log("Sercies", error);
    }
}

module.exports = services;