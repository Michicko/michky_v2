import logger from "./logger.js";
import emailJs from "@emailjs/browser";

const { showAlert } = logger;

const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || "";

emailJs.init({
  publicKey: PUBLIC_KEY,
});

const sendMessage = async (
  { name, email, message }: { name: string; email: string; message: string },
  form: HTMLFormElement,
  formBtn: HTMLButtonElement
) => {
  formBtn.disabled = true;
  const templateParams = {
    from_name: name,
    message,
    reply_to: email,
  };
  try {
    const res = await emailJs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    showAlert(
      "success",
      `Message sent ${res.text}, i'll get back to you shortly.`
    );
    form.reset();
    formBtn.disabled = false;
  } catch (error) {
    showAlert("error", `Failed! ${error.text}`);
    formBtn.disabled = false;
  }
};

export default sendMessage;
