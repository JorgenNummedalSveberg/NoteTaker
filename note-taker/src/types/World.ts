export interface IWorld {
    _id: string,
    name: string, // Name of the world, may just be something like "<person>'s world"
}

export function newWorld(name: string): IWorld {
    return {_id: '', name: name}
}