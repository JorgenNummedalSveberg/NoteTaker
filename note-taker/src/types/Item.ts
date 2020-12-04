export interface IItem {
    _id: string;
    name: string, // Name of the item
    description: string, // Description of the item
    campaigns: string[] // Campaigns the item has appeared in
}

export function newItem(name: string): IItem {
    return {_id: '', campaigns: [], description: "", name: name}
}
