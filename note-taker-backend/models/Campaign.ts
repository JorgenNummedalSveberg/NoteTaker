import mongoose, {Document, Schema} from 'mongoose';

const Campaign = new Schema({
    title: {type: String, required: true, unique: false}, // Name of the campaign
    group: {type: String, required: true, unique: false}, // Group that is playing the campaign
    world: {type: String, required: true, unique: false}, // World the campaign takes place in
});


export interface ICampaign extends Document {
    title: string, // Name of the campaign
    group: string, // Group that is playing the campaign
    world: string, // World the campaign takes place in
}

export default mongoose.model<ICampaign>('Campaign', Campaign);
