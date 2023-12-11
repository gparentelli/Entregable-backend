import { Router } from "express";
import { getUser, createUser, updateUser, deleteUser } from "../../controllers/users.controller";
import { createUserMiddleware } from "../../middleware/users.middlewares";

const router = Router();

router.get('/users', getUser);
router.post('/users', createUserMiddleware, createUser);
router.put('/users:id', updateUser);
router.delete('/users:id', deleteUser)

export default router;