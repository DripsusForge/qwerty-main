import { Router } from 'express';
import { saveUser } from '../controllers/userController.js';
const router = Router();
router.post('/', saveUser);
export default router;