import mongoose from "mongoose";

const userProfileModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    dp: {
        data: Buffer,
        contentType: String,
    },
    graduation_year: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('users_profile', userProfileModel);