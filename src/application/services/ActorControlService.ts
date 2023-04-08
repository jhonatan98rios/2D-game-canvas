import { SocketAdapter } from "../../infra/http/SocketAdapter"

export type EventList = {
    label: string
    callback: (payload: any) => void
}[]

export class ActorControlService {

    private eventList: EventList

    constructor(private socketAdapter: SocketAdapter) {

        this.eventList = [
            { label: 'actor::connected', callback: (body) => { console.log('connect', body) } },
            { label: 'actor::disconnected', callback: (body) => { console.log('disconnected', body) } },
            { label: 'actor::moved', callback: (body) => { console.log(body) } },
        ]

        this.socketAdapter.handleActorEvents(this.eventList)
    }

    execute() {
        this.socketAdapter.handleActorEvents(this.eventList)
    }
}