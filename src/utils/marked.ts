import { marked } from "marked";
import renderer from "./Renderer.js";

marked.setOptions({ renderer });

export default marked;
