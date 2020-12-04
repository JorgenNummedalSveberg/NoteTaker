export interface IQuest {
    name: string, // Title of quest
    giver: string, // Quest giver
    takers: string[], // Quest takers
    goldReward: string, // Official gold reward
    itemReward: string[], // Official item reward
    benefits: string[], // Potential benefits for completing the quest
    downsides: string[], // Potential problems with completing the quest
    description: string, // In-depth description of quest
    objective: string, // Short summary of objective to complete
    places: string[], // Places involved in the quest
    campaign: string[] // Campaign the quest happened in
}

export function newQuest(name: string): IQuest {
    return {
        benefits: [],
        campaign: [],
        description: "",
        downsides: [],
        giver: "",
        goldReward: "",
        itemReward: [],
        name: name,
        objective: "",
        places: [],
        takers: []
    }
}
