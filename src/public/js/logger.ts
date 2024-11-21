export default (function () {
  let timer: NodeJS.Timeout;

  const clearAlert = () => {
    const el = document.querySelector(".alert");

    if (el) {
      document.body.removeChild(el);
    }

    clearTimeout(timer);
  };

  const showAlert = (status: string, message: string) => {
    const container = document.createElement("div");
    container.className += `alert ${status}`;
    const firstChild = document.body.firstElementChild;
    container.textContent = message;
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    closeBtn.classList.add("close-btn");

    closeBtn.addEventListener("click", clearAlert);

    container.append(closeBtn);

    const isAlertExisting = !!document.querySelector(".alert");

    if (isAlertExisting) return;

    document.body.insertBefore(container, firstChild);

    timer = setTimeout(() => {
      clearAlert();
    }, 5000);
  };

  return {
    showAlert,
    clearAlert,
  };
})();
