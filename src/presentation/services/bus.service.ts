import { Coordinate } from "../../domain/interfaces/coordinate";
import { WssService } from "./wss.service";

export class BusService {

    constructor(
        private readonly wssService = WssService.instance,
    ) { }

    public readonly workingOnBuses: { bus: string, coordinate: Coordinate }[] = []; // Cambiado a un array de objetos con el identificador del bus y coordenadas

    // Lista de buses y su estado
    public buses: { bus: string, estado: boolean, coordinate?: Coordinate }[] = [
        { bus: 'xyz', estado: true },
        { bus: 'yzs', estado: true },
        { bus: 'abc', estado: false },
    ];

    // Método para agregar coordenadas de un bus activo
    public createBusCoordinate(coordinate: Coordinate, busId: string) {
        const bus = this.buses.find(b => b.bus === busId && b.estado);
        if (bus) {
            bus.coordinate = coordinate;

            // Actualizamos la lista de buses en trabajo
            const existingBus = this.workingOnBuses.find(b => b.bus === busId);
            if (existingBus) {
                existingBus.coordinate = coordinate;
            } else {
                this.workingOnBuses.push({ bus: busId, coordinate });
            }

            // Llamamos al método para notificar el cambio de coordenadas
            this.onBusCoordinateChange();
        }
    }

    // Método privado para enviar las coordenadas de cada bus activo individualmente
    private onBusCoordinateChange() {
        this.workingOnBuses.forEach(activeBus => {
            this.wssService.sendMessage('on-bus-coordinate-changed', {
                bus: activeBus.bus,
                coordinate: activeBus.coordinate
            });
        });
    }
}
