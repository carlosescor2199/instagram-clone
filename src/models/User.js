import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "El campo es requerido"]
    },
    password: String
})

export default model('User', userSchema)