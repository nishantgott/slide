import express from 'express';
import { getRandomSlideController, getSlideController, slideInterestFormController, slideProfileFormController } from '../controllers/slideController.js';

const router = express.Router();

router.post('/interest', slideInterestFormController);

router.post('/profile', slideProfileFormController)

router.get('/get-slide', getSlideController);

router.get('/get-random-slide', getRandomSlideController);

export default router;