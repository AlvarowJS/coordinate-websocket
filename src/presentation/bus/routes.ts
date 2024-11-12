import { Router } from "express";
import { BusController } from "./controller";

export class BusRoute {
    static get routes() {
        const router = Router()
        const busController = new BusController()
        

        return router;
    }

}