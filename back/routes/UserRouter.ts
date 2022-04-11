import { Router } from "express";
const UserController = require("../controllers/UserController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

const router = Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/authorization", AuthMiddleware, UserController.check);

module.exports = router;