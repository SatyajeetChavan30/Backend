import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,

    },
    permissions: {
        type: Boolean,
        default: true
    },
    rememberUser: {
        type: Boolean,
        default: false
    }

}, {timestamps: true}
);

export const User = mongoose.model('User', userSchema);     //User model will be shown in database as 'users' with all lowercase