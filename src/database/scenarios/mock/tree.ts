type Three = {
    sx: number
    xy: number
    swidth: number
    sheight: number
    dwidth:number
    dheight: number
    dx: number
    dy: number

}

const three_a = {
    sx: 0,
    xy: 0,
    swidth: 179,
    sheight: 142
}

const three_b = {
    sx: 0,
    xy: 142,
    swidth: 179,
    sheight: 142
}

const three_c = {
    sx: 0,
    xy: 284,
    swidth: 179,
    sheight: 142
}

const three_d = {
    sx: 0,
    xy: 426,
    swidth: 179,
    sheight: 142
}

const three_e = {
    sx: 0,
    xy: 568,
    swidth: 179,
    sheight: 142
}

export const threes: Three[] = [
    {
        ...three_a,
        dwidth: 179,
        dheight: 142,
        dx: 0,
        dy: 0,
    },
    {
        ...three_b,
        dwidth: 179,
        dheight: 142,
        dx: 300,
        dy: 300,
    },
    {
        ...three_c,
        dwidth: 179,
        dheight: 142,
        dx: 300,
        dy: 0,
    },
    {
        ...three_d,
        dwidth: 179,
        dheight: 142,
        dx: 0,
        dy: 300,
    },
    {
        ...three_e,
        dwidth: 179,
        dheight: 142,
        dx: 500,
        dy: 500,
    },
]