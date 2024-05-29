import express from 'express';
import { loginController, registerController } from '../controllers/authController.js';
import { protection } from '../protection/protection.js';

const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController);

// router.get('/test',protection,()=>console.log("darling"))

export default router;