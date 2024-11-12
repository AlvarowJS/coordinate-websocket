import { Coordinate } from "../../domain/interfaces/coordinate";
import { WssService } from "./wss.service";

export class BusService {

    constructor(
        private readonly wssService = WssService.instance,
    ) { }  
    
}
