import userInterestModel from "../models/userInterestModel.js";
import userProfileModel from "../models/userProfileModel.js";

export const slideInterestFormController = async (req, res) => {
    const { username, addInterest, deleteInterest } = req.body;
    try {
        await userInterestModel.findOneAndUpdate(
            { username },
            {
                $addToSet: {
                    sports: { $each: addInterest.sports },
                    academics: { $each: addInterest.academics },
                    skills: { $each: addInterest.skills },
                    clubs: { $each: addInterest.clubs },
                    student_chapters: { $each: addInterest.student_chapters },
                    hobbies: { $each: addInterest.hobbies },
                }
            },
            { new: true }
        );
        const updatedUserInterest = await userInterestModel.findOneAndUpdate(
            { username },
            {
                $pull: {
                    sports: { $in: deleteInterest.sports },
                    academics: { $in: deleteInterest.academics },
                    skills: { $in: deleteInterest.skills },
                    clubs: { $in: deleteInterest.clubs },
                    student_chapters: { $in: deleteInterest.student_chapters },
                    hobbies: { $in: deleteInterest.hobbies },
                }
            }
        )
        res.status(200).send({ success: true, message: 'Slide updated', updatedUserInterest });
    } catch (error) {
        console.log(error);
    }
}

export const getSlideController = async (req, res) => {
    const { username } = req.body;
    try {
        const slide = await userInterestModel.findOne({ username });
        res.status(200).send({ success: true, slide });
    } catch (error) {
        console.log(error);
    }
}

export const getRandomSlideController = async (req, res) => {
    const { username } = req.body;
    try {
        const slide = await userInterestModel.aggregate([
            { $sample: { size: 1 } }
        ]);
        res.status(200).send({ success: true, slide });
    } catch (error) {
        console.log(error);
    }
}

export const slideProfileFormController = async (req, res) => {
    const { username, name, mail, gender, branch, graduation_year } = req.body;
    try {
        const userProfile = new userProfileModel({ username, name, mail, gender, branch, graduation_year });
        await userProfile.save();
        res.status(200).send({ success: true, message: 'Slide updated', userProfile });
    } catch (error) {
        console.log(error);
    }
}

export const slideAllFormController = async (req, res) => {
    try {
        const { username, name, mail, gender, branch, graduation_year, addInterest } = req.body;
        const userProfile = new userProfileModel({ username, name, mail, gender, branch, graduation_year });
        await userProfile.save();
        await userInterestModel.findOneAndUpdate(
            { username },
            {
                $addToSet: {
                    sports: { $each: addInterest.sports },
                    academics: { $each: addInterest.academics },
                    skills: { $each: addInterest.skills },
                    clubs: { $each: addInterest.clubs },
                    student_chapters: { $each: addInterest.student_chapters },
                    hobbies: { $each: addInterest.hobbies },
                }
            },
            { new: true }
        );
    } catch (error) {
        console.log(error);
    }
}
