export type Element = {
    image: HTMLImageElement,
    width: number,
    height: number,
    x: number,
    y: number
}

export type ScenarioLayers = {
    [key: string]: Element[]
}

const CanvasImage = (src: string ) => {
    let img = new Image()
    img.src = src
    return img
}

export const layers: ScenarioLayers = {
    belowThePlayers: [
        {
            image: CanvasImage("img/layers/floor.png"),
            width: 2064,
            height: 1152,
            x: 0,
            y: 0
        },
        {
            image: CanvasImage("img/layers/houses-base.png"),
            width: 2064,
            height: 1152,
            x: 0,
            y: 0
        },  
    ],

    sameLevelAsPlayers: [
        {
            image: CanvasImage("img/blocks/tree.png"),
            width: 124,
            height: 158,
            x: 1000,
            y: 300
        },
    ],

    aboveThePlayers: [
        {
            image: CanvasImage("img/layers/houses-top.png"),
            width: 2064,
            height: 1152,
            x: 0,
            y: 0
        },
    ]
}