import { NextFunction, Request, Response } from "express";
import {
  getMarkdownContent,
  getListFromDirectory,
  getList,
  generateLinearGradient,
  readFilePromise,
  getFullPath,
  getHost,
  unslug,
} from "../utils/helpers.js";
import marked from "../utils/marked.js";
import fs from "node:fs";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

const projectListPaths =
  fs.existsSync(getFullPath("../views/projects")) &&
  (await getListFromDirectory("../views/projects"));

const noteListPaths =
  fs.existsSync(getFullPath("../views/notes")) &&
  (await getListFromDirectory("../views/notes"));

let projects = projectListPaths && (await getList(projectListPaths));

projects =
  projects &&
  projects.map((el) => {
    const { gradient, primaryColor, secondaryColor } = generateLinearGradient();
    return {
      ...el,
      background: gradient,
      secondaryColor,
      headerBg: `linear-gradient(to bottom, ${secondaryColor}, ${primaryColor})`,
    };
  });

const notes = noteListPaths && (await getList(noteListPaths));

export const getHome = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    res.render("home", {
      title: "Home page",
      projects,
      url: req.originalUrl,
      host: getHost(req),
    });
  }
);

export const getAbout = catchAsync(
  catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
    res.render("about", {
      title: "About page",
      host: getHost(req),
    });
  })
);

export const getContact = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    res.render("contact", {
      title: "Contact",
      url: req.originalUrl,
      host: getHost(req),
    });
  }
);

export const getNotes = async (req: Request, res: Response) => {
  res.render("notes", {
    title: "Notes",
    notes,
    url: req.originalUrl,
    host: getHost(req),
  });
};

export const getNote = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { slug } = req.params;
    let note =
      notes &&
      notes.find((note) => note.slug.toLowerCase() === slug.toLowerCase());

    if (!note) {
      return next(new AppError(`No note with title "${unslug(slug)}"`, 404));
    }

    const markdown = await readFilePromise(note.fileDir, "utf-8");
    note.content = await marked.parse(getMarkdownContent(markdown));

    res.render("note", {
      url: req.originalUrl,
      note,
      host: getHost(req),
    });
  }
);

export const getProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { slug } = req.params;
    const project =
      projects &&
      projects.find(
        (project) => project.slug.toLowerCase() === slug.toLowerCase()
      );

    if (!project) {
      return next(new AppError(`No project with title "${unslug(slug)}"`, 404));
    }

    const markdown = await readFilePromise(project.fileDir, "utf-8");
    project.content = await marked.parse(getMarkdownContent(markdown));

    res.render("project", {
      title: "single project page",
      project,
      url: req.originalUrl,
      host: getHost(req),
    });
  }
);
