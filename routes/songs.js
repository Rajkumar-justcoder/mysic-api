import express from "express";
import { getAllSongs, songsController } from "../controller/app/songs.js";
const router = express.Router();

router.route("/songs").get(songsController)
router.route("/all/songs").get(getAllSongs);

export const songsRouter = router;
