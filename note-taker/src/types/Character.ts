export interface ICharacter {
    _id: string,
    name: string, // Whatever name that makes the most sense to define as their "actual" name
    aliases: string[], // Fake names, nicknames, titles, preferred naming
    description: string, // Description of the character
    specialTraits: string[], // Different special traits to summarize the description, how to recognize them etc
    thoughtsSurrounding: string[], // Different random thoughts surrounding the character, suspicions etc.
    socialStatus: string, // Social status or work such as beggar, shop owner, noble, duke, king, etc.
    groups: string[], // Groups the individual is apart of
    wealth: string, // Approximated wealth
    negativeStanding: string[], // People or groups this person sees in a negative light
    positiveStanding: string[], // People or groups this person sees in a positive light
    campaigns: string[], // Campaigns they are apart of
    items: string[], // Items they are in possession of
    questsGiven: string[], // Quests they have themselves given out
    questsParticipated: string[] // Quests they have themselves taken apart in
}

export function newCharacter(name: string): ICharacter {
    return {
        _id: '',
        aliases: [],
        campaigns: [],
        description: "",
        groups: [],
        items: [],
        name: name,
        negativeStanding: [],
        positiveStanding: [],
        questsGiven: [],
        questsParticipated: [],
        socialStatus: "",
        specialTraits: [],
        thoughtsSurrounding: [],
        wealth: "",
    }
}