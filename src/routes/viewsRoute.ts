import express from "express";
import {
  getContact,
  getHome,
  getNote,
  getNotes,
  getProject,
} from "../controller/viewsController.js";

const router = express.Router();

router.get("/", getHome);

// router.get("/about", getAbout);

router.get("/contact", getContact);

router.get("/notes", getNotes);

router.get("/notes/:slug", getNote);

router.get("/projects/:slug", getProject);

export default router;
