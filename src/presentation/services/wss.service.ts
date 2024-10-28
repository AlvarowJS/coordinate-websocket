import { WebSocket, WebSocketServer } from 'ws'
import { Server } from 'http'

interface Options {
    server: Server;
    path?: string;
}

// Singleton porque solo se necesita una instanacia del websocket
// Podremos usar websocket en cualquier lado de la aplicacion
export class WssService {
    private static _instance: WssService;
    private wss: WebSocketServer;

    private constructor(options: Options) {
        const { server, path = '/ws' } = options;

        this.wss = new WebSocketServer({ server, path });
        this.start();
    }

    static get instance(): WssService {
        if (!WssService._instance) {
            throw 'WssService is not initialized';
        }

        return WssService._instance;
    }

    static initWss(options: Options) {
        WssService._instance = new WssService(options);
    }
    
    public sendMessage(type: string, payload: Object) {
        this.wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type, payload }))
            }
        })
    }
    
    public start() {
        this.wss.on('connection', (ws: WebSocket) => {
            console.log('Client connected');

            ws.on('close', () => console.log('Client Disconnect'))
        })
    }


}