import { EventList } from "../../application/services/ActorControlService";
import { Socket, io } from "socket.io-client";



export class SocketAdapter {
    private static instance: SocketAdapter
    private socket: Socket

    constructor () {
        this.socket = io("http://localhost:3000")
        this.connect()
    }

    public static getInstance(): SocketAdapter {
        if (!SocketAdapter.instance) {
            SocketAdapter.instance = new SocketAdapter();
        }

        return SocketAdapter.instance;
    }

    connect() {
        this.socket.on("connect", () => {
            console.log('connected!')
        })
    }

    disconnect(callback: () => void) {
        this.socket.on("disconnect", callback)
    }

    movePlayer(body: any) {
        this.socket.emit("player::moved", body)
    }


    handleActorEvents(eventList: EventList) {
        eventList.forEach(event => {
            this.socket.on(event.label, (data) => {
                event.callback(data)
            })
        })
    }
}