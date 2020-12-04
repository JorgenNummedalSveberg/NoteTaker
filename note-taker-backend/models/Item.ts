import mongoose, {Document, Schema} from 'mongoose';
mongoose.Schema.Types.String.checkRequired(v => typeof v === 'string');

const Item = new Schema({
    name: {type: String, required: true, unique: true}, // Name of the item
    description: {type: String, required: true, unique: false}, // Description of the item
    worlds: {type: [String], required: true, unique: false}, // Worlds the item exists in
    campaigns: {type: [String], required: true, unique: false} // Campaigns the item has appeared in
});


export interface IItem extends Document {
    name: string, // Name of the item
    description: string, // Description of the item
    campaigns: string[] // Campaigns the item has appeared in
}

export default mongoose.model<IItem>('Item', Item);
