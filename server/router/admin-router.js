const express = require('express');
const adminController = require('../controller/admin-controllers');
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/users").get(authMiddleware, adminController.getAllUsers);
router.route("/users/:id").get(authMiddleware, adminController.getUserById);
router.route("/users/update/:id").patch(authMiddleware, adminController.updateUserById)
router.route("/users/delete/:id").delete(authMiddleware, adminController.deleteUserByid);
router.route("/contacts").get(authMiddleware, adminController.getAllContacts);
router.route("/contacts/delete/:id").delete(authMiddleware, adminController.deleteContactById);

module.exports = router;