import { Router } from "express";
import { signup, login, googleSignIn, updateUser } from "../controllers/auth.controller";

const router = Router();

// Mobile app routes
router.post("/google/signin", googleSignIn);

// Regular auth routes
router.post("/signup", signup);
router.post("/login", login);

router.put('/user/:id', updateUser)

export default router;
