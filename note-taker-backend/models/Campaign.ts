import mongoose, {Document, Schema} from 'mongoose';
mongoose.Schema.Types.String.checkRequired(v => typeof v === 'string');

const Campaign = new Schema({
    name: {type: String, required: true, unique: true}, // Name of the campaign
    group: {type: String, required: true, unique: false}, // Group that is playing the campaign
    world: {type: String, required: true, unique: false}, // World the campaign takes place in
});


export interface ICampaign extends Document {
    name: string, // Name of the campaign
    group: string, // Group that is playing the campaign
    world: string, // World the campaign takes place in
}

export default mongoose.model<ICampaign>('Campaign', Campaign);
