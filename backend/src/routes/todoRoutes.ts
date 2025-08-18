import { Router } from 'express';
import { getTasks, createTask, updateTaskStatus } from '../controllers/todoController';

const router = Router();

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTaskStatus);

export default router;