//Third party imports
import { Router } from "express";

//Local imports
import UserController from "../controllers/user_controller.js";

const userController = new UserController();
const router = Router();

router.post("/login", userController.login);
router.get("/getlog", userController.getlog);

export default router;