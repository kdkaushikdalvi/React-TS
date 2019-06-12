export interface ITodos {
    text: string,
    complete: boolean
}

export interface ITodos2 extends ITodos {
    tag: string
}