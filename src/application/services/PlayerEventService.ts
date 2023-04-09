import { SocketAdapter } from "../../infra/http/SocketAdapter"
import { EventHandler } from "../models/EventHandler"
import { Player } from "../models/Player"

export class PlayerEventService {

    constructor(private socketAdapter: SocketAdapter, private eventHandler: EventHandler, private player: Player) {}

    execute() {
        if (this.eventHandler.mvUp || this.eventHandler.mvDown || this.eventHandler.mvLeft || this.eventHandler.mvRight) {
            this.socketAdapter.movePlayer({
                payload: {
                    x: this.player.x,
                    y: this.player.y
                }
            })
        }
    }
}