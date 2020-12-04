export interface ICampaign {
    name: string, // Name of the campaign
    group: string, // Group that is playing the campaign
    world: string, // World the campaign takes place in
}

export function newCampaign(name: string): ICampaign {
    return {name: name, group: '', world: ''}
}
