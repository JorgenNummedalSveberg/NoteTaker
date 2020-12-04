import mongoose, {Document, Schema} from 'mongoose';

const Group = new Schema({
    name: {type: String, required: true, unique: false}, // Whatever name that makes the most sense to define as their "actual" name
    aliases: {type: [String], required: true, unique: false}, // Fake names, nicknames, titles, preferred naming
    description: {type: String, required: true, unique: false}, // Description of the group
    specialTraits: {type: [String], required: true, unique: false}, // Different special traits to summarize the description, how to recognize them etc
    thoughtsSurrounding: {type: [String], required: true, unique: false}, // Different random thoughts surrounding the group, suspicions etc.
    socialStatus: {type: String, required: true, unique: false}, // Social status or work such as ragtag team, adventurer's group, knights, villains, corporation, etc.
    characters: {type: [String], required: true, unique: false}, // Characters in the group
    wealth: {type: String, required: true, unique: false}, // Approximated wealth
    negativeStanding: {type: [String], required: true, unique: false}, // People or groups this group sees in a negative light
    positiveStanding: {type: [String], required: true, unique: false}, // People or groups this group sees in a positive light
    campaigns: {type: [String], required: true, unique: false}, // Campaigns they are apart of
    items: {type: [String], required: true, unique: false}, // Items they are in possession of
    questsGiven: {type: [String], required: true, unique: false}, // Quests they have themselves given out
    questsParticipated: {type: [String], required: true, unique: false} // Quests they have themselves taken apart in
});


export interface IGroup extends Document {
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

export default mongoose.model<IGroup>('Group', Group);
