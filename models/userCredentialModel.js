import mongoose from "mongoose";

const userCredentialSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('users_credential', userCredentialSchema);