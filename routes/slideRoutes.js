import express from 'express';
import { getRandomSlideController, getSlideController, slideAllFormController, slideInterestFormController, slideProfileFormController } from '../controllers/slideController.js';

const router = express.Router();

router.post('/interest', slideInterestFormController);

router.post('/profile', slideProfileFormController)

router.get('/get-slide', getSlideController);

router.get('/get-random-slide', getRandomSlideController);

router.post('form-all', slideAllFormController);

export default router;