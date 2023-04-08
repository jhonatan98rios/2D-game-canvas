import { SocketAdapter } from "../../infra/http/SocketAdapter"
import { EventHandler } from "../models/EventHandler"
import { Player } from "../models/Player"

export class PlayerControlService {

    constructor(private socketAdapter: SocketAdapter, private eventHandler: EventHandler, private player: Player) {}

    execute() {

        /* if (this.eventHandler.mvUp) {
            this.socketAdapter.movePlayer({
                payload: 'mvUp'
            })
        }

        if (this.eventHandler.mvDown) {
            this.socketAdapter.movePlayer({
                payload: 'mvDown'
            })
        }

        if (this.eventHandler.mvLeft) {
            this.socketAdapter.movePlayer({
                payload: 'mvLeft'
            })
        }

        if (this.eventHandler.mvRight) {
            this.socketAdapter.movePlayer({
                payload: 'mvRight'
            })
        } */

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