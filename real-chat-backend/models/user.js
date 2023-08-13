const { Schema, model } = require('mongoose');
const isValid = require('validator')

const User = new Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 30,
        required: true
    },
    avatar: {
        type: String,
        default: '../static/default-avatar.jpg'
    },
    email: {
        type: String,
        minlength: 4,
        maxlength: 30,
        required: true,
        unique: true,
        validate: {
            validator(email) {
                return isValid.isEmail(email)
            },
            message: 'Укажите правильный email'
        }
    },
    password: {
        type: String,
        minlength: 4,
        maxlength: 30,
        required: true
    }
})

module.exports = model('user', User)