import mongoose, {Document, Schema} from 'mongoose';

const World = new Schema({
    name: {type: String, required: true, unique: false}, // Name of the world, may just be something like "<person>'s world"
});


export interface IWorld extends Document {
    name: string, // Name of the world, may just be something like "<person>'s world"
}

export default mongoose.model<IWorld>('World', World);
