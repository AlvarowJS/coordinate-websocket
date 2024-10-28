import { Coordinate } from "../../domain/interfaces/coordinate";
import { WssService } from "./wss.service";

export class BusService {

    constructor(
        private readonly wssService = WssService.instance,
    ) { }

    public readonly workingOnBuses: Coordinate[] = []

    public get workingOnTickets(): Coordinate[] {
        return this.workingOnBuses
    }


    public busCordenate: Coordinate[] = [
        { lat: 40.7128, lng: -74.0060 }
    ];

    public createBusCoordinate(coordinate: Coordinate) {
        this.busCordenate[0] = coordinate;
        this.onBusCoordinateChange();
    }

    private onBusCoordinateChange() {
        this.wssService.sendMessage('on-bus-coordinate-changed', this.workingOnBuses);
    }
}