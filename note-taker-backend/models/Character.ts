import mongoose, {Document, Schema} from 'mongoose';

const Character = new Schema({
    name: {type: String, required: true, unique: true}, // Whatever name that makes the most sense to define as their "actual" name,
    aliases: {type: [String], required: true, unique: false}, // Fake names, nicknames, titles, preferred naming
    description: {type: String, required: true, unique: false}, // Description of the character
    specialTraits: {type: [String], required: true, unique: false}, // Different special traits to summarize the description, how to recognize them etc
    thoughtsSurrounding: {type: [String], required: true, unique: false}, // Different random thoughts surrounding the character, suspicions etc.
    socialStatus: {type: String, required: true, unique: false}, // Social status or work such as beggar, shop owner, noble, duke, king, etc.
    groups: {type: [String], required: true, unique: false}, // Groups the individual is apart of
    wealth: {type: String, required: true, unique: false}, // Approximated wealth
    negativeStanding: {type: [String], required: true, unique: false}, // People or groups this person sees in a negative light
    positiveStanding: {type: [String], required: true, unique: false}, // People or groups this person sees in a positive light
    campaigns: {type: [String], required: true, unique: false}, // Campaigns they are apart of
    items: {type: [String], required: true, unique: false}, // Items they are in possession of
    questsGiven: {type: [String], required: true, unique: false}, // Quests they have themselves given out
    questsParticipated: {type: [String], required: true, unique: false} // Quests they have themselves taken apart in
});


export interface ICharacter extends Document {
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

export default mongoose.model<ICharacter>('Character', Character);
