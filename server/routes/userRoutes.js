import { Router } from "express";
import { getAllUsers, getUserById, login, logout, register, updateUser, checkSession, deleteUser } from "../controllers/userControllers.js";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", getAllUsers);

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check-session",auth, checkSession);

router.get("/:id",auth, getUserById);
router.put("/:id",auth, updateUser);
router.delete("/:id", auth, isAdmin, deleteUser);

export default router;