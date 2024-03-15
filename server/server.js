require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router/auth-router');
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./Utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
// Handling cors policy 
const corsOptions = {
    origin: "http://localhost:5173",
    method: "GET, PUT, PATCH, DELETE, HEAD, POST",
    credentials: true
}
app.use(cors(corsOptions));

app.use(express.json()); // now we can use json in our app

app.use("/api/auth", authRoute);
app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`My Server is running on ${PORT}`);
    });
})










// app.get('/', (req, res) => {
//     res
//         .status(200)
//         .send("Welcome to my first MERN server");
// });

app.get('/register', (req, res) => {
    res
        .status(200)
        .send("Welcome to my Registration first Page");
});
