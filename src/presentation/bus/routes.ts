import { Router } from "express";
import { BusController } from "./controller";

export class BusRoute {
    static get routes() {
        const router = Router()
        const busController = new BusController()

        router.get('/', busController.getBusCoordinate);
        router.post('/', busController.sendBusCoordinate);

        return router;
    }

}