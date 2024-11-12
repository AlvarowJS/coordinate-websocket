import { BusService } from "../services/bus.service";
import { Request, Response } from "express"

export class BusController {
    constructor(
        private readonly busService = new BusService()
    ) { }
    
}