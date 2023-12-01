import { Router } from "express";
import { getUser, createUser } from "../../controllers/users.controller";
import { createUserMiddleware } from "../../middleware/users.middlewares";

const router = Router();

router.get('/users', getUser);
router.post('/users', createUserMiddleware, createUser)

export default router;