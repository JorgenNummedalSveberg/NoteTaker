export interface IItem {
    name: string, // Name of the item
    description: string, // Description of the item
    campaigns: string[] // Campaigns the item has appeared in
}

export function newItem(name: string): IItem {
    return {campaigns: [], description: "", name: name}
}
