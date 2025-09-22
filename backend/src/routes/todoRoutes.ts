import { Router } from "express";
import {
  getTasks,
  createTask,
  updateTaskStatus,
  testear,
} from "../controllers/todoController";

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTaskStatus);
router.post("/test", testear);

export default router;
