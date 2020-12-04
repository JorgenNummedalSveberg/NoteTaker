import mongoose, {Document, Schema} from 'mongoose';

const Quest = new Schema({
    name: {type: String, required: true, unique: true}, // Title of quest
    giver: {type: String, required: true, unique: false}, // Quest giver
    takers: {type: [String], required: true, unique: false}, // Quest takers
    goldReward: {type: String, required: true, unique: false}, // Official gold reward
    itemReward: {type: [String], required: true, unique: false}, // Official item reward
    benefits: {type: [String], required: true, unique: false}, // Potential benefits for completing the quest
    downsides: {type: [String], required: true, unique: false}, // Potential problems with completing the quest
    description: {type: String, required: true, unique: false}, // In-depth description of quest
    objective: {type: String, required: true, unique: false}, // Short summary of objective to complete
    places: {type: [String], required: true, unique: false}, // Places involved in the quest
    campaign: {type: [String], required: true, unique: false} // Campaign the quest happened in
});


export interface IQuest extends Document {
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

export default mongoose.model<IQuest>('Quest', Quest);
