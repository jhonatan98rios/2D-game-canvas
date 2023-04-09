import { SocketAdapter } from "../../infra/http/SocketAdapter"
import { Actor } from "../models/Actor"
import { Game } from "../models/Game"

import { SCREEN_WIDTH, SCREEN_HEIGHT, BLOCK_IMAGE_SIZE, BLOCK_SIZE } from "../../constants"
import { Scenario } from "../models/Scenario"


export type EventList = {
    label: string
    callback: (payload: any) => void
}[]

type Body = {
    actor: string
    payload: {
        x: number
        y: number
    }
}

export class ActorEventService {

    private eventList: EventList
    private game: Game

    constructor(private socketAdapter: SocketAdapter, game: Game, private scenario: Scenario) {

        this.game = game

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

    connected(body: Body) {
        if (this.game.player.id && this.game.player.id != body.actor) {

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
    }

    disconnected(body: Body) {
        console.log('disconnected', body)

        this.game.actors = this.game.actors.filter(actor => actor.id !== body.actor)
    }

    moved(body: Body) {
        let actor = this.game.actors.find(actor => actor.id == body.actor)

        if (actor) {

            let mvDown = false
            let mvLeft = false
            let mvRight = false
            let mvUp = false

            if (body.payload.x > actor.x) {
                mvRight = true
            } else if (body.payload.x < actor.x) {
                mvLeft = true
            }

            if (body.payload.y > actor.y) {
                mvDown = true
            } else if (body.payload.y < actor.y) {
                mvUp = true
            }

            actor.setDirection(mvLeft, mvUp, mvRight, mvDown)
            actor.spriteAnimation(mvLeft, mvUp, mvRight, mvDown)
            actor.positionAnimation(body.payload)
        }
    }
}