import express from "express";
import {
  getContact,
  getHome,
  getNote,
  getNotes,
  getNotFound,
  getProject,
} from "../controller/viewsController.js";

const router = express.Router();

router.get("/", getHome);

// router.get("/about", getAbout);

router.get("/contact", getContact);

router.get("/notes", getNotes);

router.get("/notes/:slug", getNote);

router.get("/:slug", getProject);

router.get("*", getNotFound);

export default router;
