import { Schema, model } from 'mongoose'
import validate from 'mongoose-validator'

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "El campo es requerido"],
        validate: [
            validate({
                validator: 'isLength',
                arguments: [6,14],
                message: 'El nombre de usuario debe contener {ARGS[0]} y {ARGS[1]} carácteres'
            }),
            validate({
                validator: 'isAlphanumeric',
                message: 'El nombre de usuario debe contener solo letras y números. No puede contener espacios ni carácters especiales'
            })
        ]
    },
    password: String,
    fullname: {
        type: String,
        validate: validate({
            validator: 'isLength',
            arguments: [2,35],
            message: 'El nombre debe contener {ARGS[0]} y {ARGS[1]} carácteres'
        })
    },
    email: {
        type: String,
        unique: true,
        validate: validate({
            validator: 'isEmail',
            message: 'Introduce un email valido'
        })
    },
    desc: String,
    bio: String,
    thumbnail: String,
    posts: {
        type: [],
        default: []
    },
    following: {
        type: [],
        default: []
    },
    followers: {
        type: [],
        default: []
    }

})

export default model('User', userSchema)