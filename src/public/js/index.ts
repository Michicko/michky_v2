import hljs from "./_highlightJs.js";
import sendMessage from "./contact_form.js";
import lazyLoad from "./lazyLoad.js";

hljs.highlightAll();

declare global {
  interface Window { 
    dataLayer: any 
  }
}

window.dataLayer = window.dataLayer || [];

function gtag(a, b) {
  window.dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "G-112PHSF9F5");

const contact_form: HTMLFormElement | null =
  document.querySelector("#contact-form");

if (contact_form) {
  const nameInput: HTMLInputElement | null = document.querySelector("#name");
  const emailInput: HTMLInputElement | null = document.querySelector("#email");
  const messageInput: HTMLTextAreaElement | null =
    document.querySelector("#message");
  const contactFormBtn: HTMLButtonElement | null =
    document.querySelector("#contact-btn");

  contact_form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      nameInput &&
      emailInput &&
      messageInput &&
      contactFormBtn &&
      contact_form
    ) {
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;

      sendMessage(
        {
          name,
          email,
          message,
        },
        contact_form,
        contactFormBtn
      );
    }
  });
}

// lazy load images when scrolled to view
document.addEventListener("DOMContentLoaded", function () {
  const projectImages: NodeListOf<HTMLImageElement> = document.querySelectorAll(
    ".project__coverImage"
  );
  window.addEventListener("scroll", () => {
    lazyLoad(projectImages);
  });
  window.addEventListener("resize", () => {
    lazyLoad(projectImages);
  });
});
