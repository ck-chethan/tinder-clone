import mongoose from "mongoose";
const { Schema } = mongoose;
const cardSchema = new Schema({
    name: String,
    imgUrl: String
});

export default mongoose.model('Card', cardSchema);