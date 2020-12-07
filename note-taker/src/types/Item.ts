export interface IItem {
    _id: string;
    name: string, // Name of the item
    description: string, // Description of the item
    campaigns: string[] // Campaigns the item has appeared in
}

export function newItem(name: string, description: string, campaign: string): IItem {
    return {_id: '', campaigns: [campaign], description: description, name: name}
}
