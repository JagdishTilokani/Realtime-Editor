import {
    getUsers,
    getUserById,
    addUser,
    doesExist,
} from "../controllers/userController.js";
import express from "express";
const router = express.Router();

router.route("/").get(getUsers);
router.route("/login").post(doesExist);
router.route("/add").post(addUser);
router.route("/:id").get(getUserById);

export default router;
