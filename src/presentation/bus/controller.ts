import { BusService } from "../services/bus.service";
import { Request, Response } from "express"

export class BusController {
    constructor(
        private readonly busService = new BusService()
    ) { }
<<<<<<< HEAD


    public getBusCoordinate = async (req: Request, res: Response) => {
        res.json(this.busService.buses);
    }

    public sendBusCoordinate = async (req: Request, res: Response) => {
        res.json(this.busService.createBusCoordinate);
    }
=======
>>>>>>> aca161d (quitando apis innecesarias, llamando la el servicio de recibir datos del websocket)
    
}