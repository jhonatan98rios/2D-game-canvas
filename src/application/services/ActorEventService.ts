import { SocketAdapter } from "../../infra/http/SocketAdapter"
import { Actor } from "../models/Actor"
import { Game } from "../models/Game"

import { SCREEN_WIDTH, SCREEN_HEIGHT, BLOCK_IMAGE_SIZE, BLOCK_SIZE } from "../../constants"
import { Scenario } from "../models/Scenario"


export type EventList = {
    label: string
    callback: (payload: any) => void
}[]

export class ActorEventService {

    private eventList: EventList
    private game: Game

    constructor(private socketAdapter: SocketAdapter, game: Game, private scenario: Scenario) {

        this.game = game

        console.log('constructor', this.game)

        this.eventList = [
            { label: 'actor::connected', callback: this.connected.bind(this) },
            { label: 'actor::disconnected', callback: this.disconnected.bind(this) },
            { label: 'actor::moved', callback: this.moved.bind(this) },
        ]

        this.socketAdapter.handleActorEvents(this.eventList)

        this.game.actorEventService = this
    }

    render() {
        this.game.canvas.renderActors(this.game.actors)
    }

    connected(body: any) {

        let actor = new Actor({
            id: body.actor,
            x: SCREEN_WIDTH / 2, 
            y: SCREEN_HEIGHT / 2,
            width: 48,
            height: 64,
            speed: 4,
            srcX: 0,
            srcY: BLOCK_IMAGE_SIZE,
            scenario: this.scenario
        })

        this.game.actors.push(actor)
    }

    disconnected(body: any) {
        console.log('disconnected', body)
    }

    moved(body: any) {
        console.log('moved', body)
    }


}