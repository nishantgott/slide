import mongoose from "mongoose";

const userInterestModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    sports: [String], // e.g., ["football", "cricket"]
    academics: [String], // e.g., ["web dev", "ML", "DSA", "cybersecurity"]
    skills: [String], // e.g., ["painting", "musical instruments", "singing", "dancing"]
    clubs: [String],
    student_chapters: [String],
    hobbies: [String], //anime, reading, kdrama, music...
}, { timestamps: true })

export default mongoose.model('users_interest', userInterestModel);