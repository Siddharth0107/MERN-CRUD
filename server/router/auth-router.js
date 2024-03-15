const express = require('express');
const router = express.Router();
const authControllers = require("../controller/auth-controller");
const { signupSchema } = require("../validators/auth-validator");
const { loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware")

// router
//     .route('/register')
//     .post(validate(signupSchema), authControllers.register);

router.route('/').get(authControllers.home);
router.route('/register').post(validate(signupSchema), authControllers.register)
router.route('/login').post(validate(loginSchema), authControllers.login);
router.route("/user").get(authMiddleware, authControllers.user);
router.route("/admin");

module.exports = router;













// router.get('/', (req, res) => {
//     res.status(200).send("Welcome to the MERN app using router!");
// });

// router.get('/register', (req, res) => {
//     res.status(200).send("Welcome to the Registration page using router!");
// });

