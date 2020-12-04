export interface ICampaign {
    _id: string;
    name: string, // Name of the campaign
    group: string, // Group that is playing the campaign
    world: string, // World the campaign takes place in
}

export function newCampaign(name: string): ICampaign {
    return {_id: '', name: name, group: '', world: ''}
}
