//Third party imports
import { Router } from "express";

//Local imports
import guestsRouter from "./guest_router.js";
import visitGuestRouter from "./visit-guest_router.js";
import userRouter from "./user_router.js";

export default class MainRouter {
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.use("/api/guest", guestsRouter);
        this.router.use("/api/visit", visitGuestRouter);
        this.router.use("/api/user", userRouter);
    }

    getRouter() {
        return this.router;
    }
}