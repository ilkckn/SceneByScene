import { Router } from "express";
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from "../controllers/bookControllers.js";

const router = Router();

router.get("/", getAllBooks);
router.post("/", createBook);

router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
