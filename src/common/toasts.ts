import Toastify from "toastify-js";

export const showSuccessToast = (successMessage: string) => {
  const successEl = document
    .querySelectorAll("#success-notification-content")[0]
    .cloneNode(true) as HTMLElement;

  const fontMediumElement = successEl.querySelector("#success-notification");
  if (fontMediumElement) {
    fontMediumElement.textContent = successMessage;
  }

  successEl.classList.remove("hidden");

  Toastify({
    node: successEl,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
  }).showToast();
};

export const showFailToast = (errorMessage: string) => {
  const failedEl = document
    .querySelectorAll("#failed-notification-content")[0]
    .cloneNode(true) as HTMLElement;

  const fontMediumElement = failedEl.querySelector("#fail-notification");
  if (fontMediumElement) {
    fontMediumElement.textContent = errorMessage;
  }

  failedEl.classList.remove("hidden");

  Toastify({
    node: failedEl,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
  }).showToast();
};
