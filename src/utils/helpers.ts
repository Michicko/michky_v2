import tinycolor from "tinycolor2";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import path from "node:path";
import { promisify } from "node:util";
import { readFile, readdir } from "node:fs";
import { Request } from "express";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const getFullPath = (dir: string) => path.join(__dirname, dir);

export const readdirPromise = promisify(readdir);
export const readFilePromise = promisify(readFile);

export const generateLinearGradient = () => {
  const primary = tinycolor.mix(
    tinycolor.random().saturate(10),
    tinycolor("#fff"),
    50
  );

  const primaryColor = primary.toHexString();
  const secondaryColor = primary.complement().toHexString();
  const direction = Math.floor(Math.random() * 360);

  const gradient = `linear-gradient(${direction}deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;

  return { gradient, primaryColor, secondaryColor };
};

type valueof<T> = T[keyof T];

export type Frontmatter = {
  [key: string]: any;
};

// code from https://lebcit.github.io/posts/create-a-simple-markdown-based-blog-in-nodejs/
export const parseFrontMatter = (text: string, delimiter = "---") => {
  const lines = text.split("\n");
  const frontmatter: Frontmatter = {};

  let i = 0;
  if (!lines[i].startsWith(delimiter)) {
    throw new Error("Front matter delimiter not found.");
  }

  i++;
  while (i < lines.length && !lines[i].startsWith(delimiter)) {
    const line = lines[i].trim();
    const separatorIndex = line.indexOf(":");
    
    if (separatorIndex === -1) {
      throw new Error(`Invalid front matter syntax: ${line}`);
    }

    const key: keyof typeof frontmatter = line.slice(0, separatorIndex).trim();
    let value: valueof<Frontmatter> = line.slice(separatorIndex + 1).trim();

    // Check if value is wrapped in brackets
    if (value.startsWith("[") && value.endsWith("]")) {
      // Remove brackets and split into array elements
      const trimmedValue = value.slice(1, -1).trim();
      if (trimmedValue.length > 0) {
        value = trimmedValue.split(",").map((item: string) => item.trim());
      } else {
        value = [];
      }
    }

    frontmatter[key] = value;
    i++;
  }

  if (i === lines.length) {
    throw new Error("End of front matter not found.");
  }

  const content = lines.slice(i + 1).join("\n");

  return {
    frontmatter,
    content,
  };
};

export const getFrontMatter = (text: string) => {
  return parseFrontMatter(text).frontmatter;
};

export const getMarkdownContent = (text: string) => {
  return parseFrontMatter(text).content;
};

export const getListFromDirectory = async (dir: string) => {
  const fullPath = getFullPath(dir);

  let files = await readdirPromise(fullPath);
  files = files.map((el) => `${fullPath}/${el}`);

  return files;
};

export const generateDataObjectFromMarkdown = async (text: string) => {
  const parsed = parseFrontMatter(text);
  const obj = parsed.frontmatter;
  return obj;
};

export const getList = async (listPaths: string[]) => {
  return await Promise.all(
    listPaths.map(async (el) => {
      const markdown = await readFilePromise(el, "utf-8");
      const obj = await generateDataObjectFromMarkdown(markdown);
      obj.fileDir = el;
      return obj;
    })
  );
};

export const getHost = (req: Request) => `${req.protocol}://${req.get("host")}`

export const unslug = (str: string) => str.replace(/-/g, ' ');