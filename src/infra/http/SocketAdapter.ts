import { Player } from "../../application/models/Player";
import { EventList } from "../../application/services/ActorEventService";
import { Socket, io } from "socket.io-client";



export class SocketAdapter {
    private static instance: SocketAdapter
    socket: Socket

    constructor (player: Player) {
        this.socket = io("http://localhost:3000")
        this.connect(player)
    }

    public static getInstance(player: Player): SocketAdapter {
        if (!SocketAdapter.instance) {
            SocketAdapter.instance = new SocketAdapter(player);
        }

        return SocketAdapter.instance;
    }

    connect(player: Player) {
        this.socket.on("connect", () => {
            console.log('connected!!', this.socket.id)
            player.id = this.socket.id
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