import userInterestModel from "../models/userInterestModel.js";

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
        res.status(500).send('error in updating slide');
    }

}

