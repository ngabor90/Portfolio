/**
 *
 * Lightweight, data-attribute driven internationalization.
 *
 * Supported attributes:
 *  - data-i18n="key"            -> element.innerText = translations[lang][key]
 *  - data-i18n-prefix="key"     -> the element's leading text node is set to
 *                                   translations[lang][key] + " " (used for
 *                                   "Label: <span>value</span>" style markup
 *                                   and "Heading <span>Highlight</span>" headings)
 *  - data-i18n-placeholder="key"-> element.placeholder = translations[lang][key]
 *  - data-i18n-href-hu / -en    -> element.href is swapped based on language
 *
 * Depends on the global `translations` object defined in translations.js.
 */

const STORAGE_KEY = "selectedLanguage";
const DEFAULT_LANGUAGE = "hu";

/**
 * Animates the rotating role titles in the hero section.
 * @param {object} dict - the translation dictionary for the active language
 */
const animateHeroRoles = (dict) => {
  const heading = document.getElementById("homeH2");
  if (!heading || !Array.isArray(dict.spans)) return;

  const spanElements = heading.querySelectorAll("span");
  let animationDelay = 0;

  dict.spans.forEach((spanData, idx) => {
    const spanElement = spanElements[idx];
    if (!spanElement) return;

    setTimeout(() => {
      spanElement.setAttribute("data-text", spanData.text);
      spanElement.innerText = spanData.text;
      spanElement.style.setProperty("--i", spanData.styleIndex);

      // Restart the CSS animation
      spanElement.classList.remove("animated");
      // eslint-disable-next-line no-unused-expressions
      spanElement.offsetHeight; // force reflow
      spanElement.classList.add("animated");
    }, animationDelay);

    animationDelay += 500;
  });
};

/**
 * Applies a "Label: <span>Value</span>" / "Heading <span>Highlight</span>"
 * translation to an element marked with data-i18n-prefix.
 * @param {HTMLElement} element
 * @param {object} dict
 */
const applyPrefixedElement = (element, dict) => {
  const prefixKey = element.dataset.i18nPrefix;
  const prefixValue = dict[prefixKey];
  if (prefixValue === undefined) return;

  const firstChild = element.firstChild;
  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    firstChild.textContent = prefixValue.endsWith(" ")
      ? prefixValue
      : `${prefixValue} `;
  }

  // The nested <span data-i18n="...Span"> (if any) is handled by the
  // generic data-i18n pass below, so nothing else to do here.
};

/**
 * Applies the translation dictionary for the given language to the whole
 * document and persists the choice.
 * @param {"hu"|"en"} language
 */
const setLanguage = (language) => {
  const dict = translations[language];
  if (!dict) return;

  document.documentElement.lang = language;

  animateHeroRoles(dict);

  // Simple text replacements
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = dict[key];
    if (value !== undefined) {
      element.innerText = value;
    }
  });

  // "Label: <span>Value</span>" / heading + highlighted span
  document.querySelectorAll("[data-i18n-prefix]").forEach((element) => {
    applyPrefixedElement(element, dict);
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = dict[key];
    if (value !== undefined) {
      element.placeholder = value;
    }
  });

  // Language-specific href (e.g. CV download link)
  const hrefAttr = `data-i18n-href-${language}`;
  document.querySelectorAll(`[${hrefAttr}]`).forEach((element) => {
    element.href = element.getAttribute(hrefAttr);
  });
};

/**
 * Reads the persisted language preference, falling back to the default.
 * @returns {"hu"|"en"}
 */
const getInitialLanguage = () =>
  localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;

/**
 * Persists the chosen language.
 * @param {"hu"|"en"} language
 */
const saveLanguage = (language) => {
  localStorage.setItem(STORAGE_KEY, language);
};

/**
 * Wires up the language <select> and applies the initial language.
 */
const initLanguageSwitcher = () => {
  const languageSelect = document.getElementById("languageSelect");
  if (!languageSelect) return;

  const initialLanguage = getInitialLanguage();
  languageSelect.value = initialLanguage;
  setLanguage(initialLanguage);

  languageSelect.addEventListener("change", (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    saveLanguage(newLanguage);
    closeMobileMenuIfOpen();
  });
};

document.addEventListener("DOMContentLoaded", initLanguageSwitcher);