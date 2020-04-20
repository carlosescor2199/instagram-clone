import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    by: {
        type: {},
        required: true
    },
    desc: String,
    photo: {
        type: String,
        required: true
    },
    likeBy: {
        type: [],
        default: []
    },
    comments: {
        type: [],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
     
})

export default model('Post', postSchema);