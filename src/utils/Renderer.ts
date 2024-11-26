import { marked } from "marked";
const renderer = new marked.Renderer();

renderer.link = ({ href, title, text }) => {
  let out = `<a href="${href}"`;
  if (title) {
    out += ` title="${title}"`;
    // if external link
  } else if (href.match(/^https?:\/\//)) {
    out += ' target="_blank"';
  }
  out += `>${text}</a>`;
  return out;
};

export default renderer;
