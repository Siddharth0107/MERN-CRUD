const mongoose = require('mongoose');

// const uri = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(uri);
// const URI = "mongodb+srv://siddharth:siddharthpathak123@cluster0.isoz2wj.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection established");
    } catch (error) {
        console.log("Connection Failed");
        process.exit(0);
    }
}

module.exports = connectDb;