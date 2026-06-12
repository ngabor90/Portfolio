/**
 * contact-form.js
 *
 * Handles the contact form submission: posts to send-email.php and shows
 * a localized success/error message via SweetAlert2.
 */

const CONTACT_ENDPOINT = "send-email.php";

/**
 * Reads the currently active language's translation dictionary.
 * @returns {object}
 */
const getActiveTranslations = () => {
  const language = localStorage.getItem("selectedLanguage") || "hu";
  return translations[language];
};

/**
 * Puts the submit button into a "sending" state.
 * @param {HTMLButtonElement} button
 * @param {object} dict
 */
const setSubmitting = (button, dict) => {
  button.disabled = true;
  button.innerHTML = dict.sendingEmail || "Küldés...";
  button.style.background = "transparent";
  button.style.color = "var(--main-color)";
  button.style.boxShadow = "none";
};

/**
 * Collects the form field values into the payload expected by the backend.
 * @returns {Record<string, string>}
 */
const collectFormData = () => ({
  form_name: document.getElementById("form_name").value,
  "input-email": document.getElementById("input-email").value,
  "input-phone": document.getElementById("input-phone").value,
  "input-subject": document.getElementById("input-subject").value,
  "input-text": document.getElementById("input-text").value,
});

const showSuccess = (dict) => {
  Swal.fire({
    title: dict.successTitle || "Sikeres üzenetküldés!",
    text:
      dict.successText ||
      "Köszönöm levelét, hamarosan felveszem a kapcsolatot Önnel!",
    icon: "success",
    confirmButtonText: dict.confirmButtonText || "OK",
  }).then(() => {
    location.reload();
  });
};

const showError = (dict) => {
  Swal.fire({
    title: dict.errorTitle || "Hiba történt!",
    text: dict.errorText || "Nem sikerült elküldeni az üzenetet.",
    icon: "error",
    confirmButtonText: dict.confirmButtonText || "OK",
  });
};

const showNetworkError = () => {
  Swal.fire({
    title: "Hálózati hiba!",
    text: "Nem sikerült kapcsolatot létesíteni a szerverrel.",
    icon: "error",
    confirmButtonText: "OK",
  });
};

/**
 * Submit handler for the contact form.
 * @param {SubmitEvent} event
 */
const handleContactSubmit = (event) => {
  event.preventDefault();

  const dict = getActiveTranslations();
  const submitButton = document.getElementById("inputButton");
  setSubmitting(submitButton, dict);

  fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(collectFormData()),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        showSuccess(dict);
      } else {
        showError(dict);
      }
    })
    .catch(() => {
      showNetworkError();
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", handleContactSubmit);
  }
});