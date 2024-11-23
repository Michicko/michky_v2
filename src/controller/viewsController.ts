import { Request, Response } from "express";
import {
  getMarkdownContent,
  getListFromDirectory,
  getList,
  generateLinearGradient,
  readFilePromise,
} from "../utils/helpers.js";
import { marked } from "marked";

const projectListPaths = await getListFromDirectory("../views/projects");
const noteListPaths = await getListFromDirectory("../views/notes");

let projects = await getList(projectListPaths);

projects = projects.map((el) => {
  const { gradient, primaryColor, secondaryColor } = generateLinearGradient();
  return {
    ...el,
    background: gradient,
    secondaryColor,
    headerBg: `linear-gradient(to bottom, ${secondaryColor}, ${primaryColor})`,
  };
});

const notes = await getList(noteListPaths);

export const getHome = async (req: Request, res: Response) => {
  res.render("home", {
    title: "Home page",
    projects,
    url: req.originalUrl,
    host: `${req.protocol}://${req.get("host")}`,
  });
};

export const getAbout = (req: Request, res: Response) => {
  res.render("about", {
    title: "About page",
    host: `${req.protocol}://${req.get("host")}`,
  });
};

export const getContact = (req: Request, res: Response) => {
  res.render("contact", {
    title: "Contact",
    url: req.originalUrl,
    host: `${req.protocol}://${req.get("host")}`,
  });
};

export const getNotes = async (req: Request, res: Response) => {
  res.render("notes", {
    title: "Notes",
    notes,
    url: req.originalUrl,
    host: `${req.protocol}://${req.get("host")}`,
  });
};

export const getNote = async (req: Request, res: Response) => {
  const { slug } = req.params;
  let note = notes.find(
    (note) => note.slug.toLowerCase() === slug.toLowerCase()
  );

  if (note) {
    const markdown = await readFilePromise(note.fileDir, "utf-8");
    note.content = await marked.parse(getMarkdownContent(markdown));
  }

  res.render("note", {
    title: note?.title,
    url: req.originalUrl,
    note,
    host: `${req.protocol}://${req.get("host")}`,
  });
};

export const getProject = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const project = projects.find(
    (project) => project.slug.toLowerCase() === slug.toLowerCase()
  );

  if (project) {
    const markdown = await readFilePromise(project.fileDir, "utf-8");
    project.content = await marked.parse(getMarkdownContent(markdown));
  }

  res.render("project", {
    title: "single project page",
    project,
    url: req.originalUrl,
    host: `${req.protocol}://${req.get("host")}`,
  });
};

export const getNotFound = (_req: Request, res: Response) => {
  res.send("Not found page");
};
