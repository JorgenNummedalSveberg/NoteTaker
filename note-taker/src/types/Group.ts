export interface IGroup {
    name: string, // Whatever name that makes the most sense to define as their "actual" name
    aliases: string[], // Fake names, nicknames, titles, preferred naming
    description: string, // Description of the group
    specialTraits: string[], // Different special traits to summarize the description, how to recognize them etc
    thoughtsSurrounding: string[], // Different random thoughts surrounding the group, suspicions etc.
    socialStatus: string, // Social status or work such as ragtag team, adventurer's group, knights, villains, corporation, etc.
    characters: string[], // Characters in the group
    wealth: string, // Approximated wealth
    negativeStanding: string[], // People or groups this group sees in a negative light
    positiveStanding: string[], // People or groups this group sees in a positive light
    campaigns: string[], // Campaigns they are apart of
    items: string[], // Items they are in possession of
    questsGiven: string[], // Quests they have themselves given out
    questsParticipated: string[] // Quests they have themselves taken apart in
}

export function newGroup(name: string): IGroup {
    return {
        aliases: [],
        campaigns: [],
        characters: [],
        description: "",
        items: [],
        name: name,
        negativeStanding: [],
        positiveStanding: [],
        questsGiven: [],
        questsParticipated: [],
        socialStatus: "",
        specialTraits: [],
        thoughtsSurrounding: [],
        wealth: ""
    }
}