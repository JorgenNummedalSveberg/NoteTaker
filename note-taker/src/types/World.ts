export interface IWorld {
    name: string, // Name of the world, may just be something like "<person>'s world"
}

export function newWorld(name: string) {
    return {name: name}
}