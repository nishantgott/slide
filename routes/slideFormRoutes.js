import express from 'express';
import { slideInterestFormController } from '../controllers/slideFormController.js';

const router = express.Router();

router.post('/interest', slideInterestFormController);

export default router;