import express from 'express';
import { PrelimsExamController } from '../controllers/exam.prelims.controller';
import { authenticateTeacher } from '../middleware/auth.middleware';

const router = express.Router();

router.use(authenticateTeacher);

router.post('/prelims', PrelimsExamController.createPrelimsExam);
router.get('/prelims', PrelimsExamController.getTeacherPrelimsExams);
router.get('/prelims/:id', PrelimsExamController.getPrelimsExamById);
router.delete('/prelims/:id', PrelimsExamController.deletePrelimsExam);

export default router;