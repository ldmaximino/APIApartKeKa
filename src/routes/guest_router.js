//Third party imports
import { Router } from "express";

//Local imports
import GuestController from "../controllers/guest_controller.js";

const guestController = new GuestController();
const router = Router();

router.post("/", guestController.createGuest);
router.put("/:id", guestController.updateGuest);
router.get("/getbyname", guestController.getByName);
router.get("/getbynrodoc", guestController.getByNroDoc);

export default router;