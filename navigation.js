/**
 *
 * Handles the top navigation (section switching + mobile menu toggle)
 * and the resume tab buttons.
 */

const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

/**
 * Closes the mobile navigation menu if it is currently open.
 * Exposed for i18n.js, which needs to close the menu after a language change.
 */
const closeMobileMenuIfOpen = () => {
  if (navbar.classList.contains("active")) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
};

/**
 * Resets the page-transition state shared by the header bars animation
 * and section visibility, ready for the next section to become active.
 */
const resetPageTransition = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");

  header.classList.remove("active");
  setTimeout(() => header.classList.add("active"), 1100);

  navLinks.forEach((link) => link.classList.remove("active"));

  barsBox.classList.remove("active");
  setTimeout(() => barsBox.classList.add("active"), 1100);

  sections.forEach((section) => section.classList.remove("active"));

  closeMobileMenuIfOpen();
};

/**
 * Activates the section at the given index after the transition animation.
 * @param {number} index
 */
const activateSection = (index) => {
  resetPageTransition();
  navLinks[index].classList.add("active");
  setTimeout(() => sections[index].classList.add("active"), 1100);
};

const initSectionNavigation = () => {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  navLinks.forEach((link, idx) => {
    link.addEventListener("click", () => {
      if (!link.classList.contains("active")) {
        activateSection(idx);
      }
    });
  });

  logoLink.addEventListener("click", () => {
    if (!navLinks[0].classList.contains("active")) {
      activateSection(0);
    }
  });
};

const initResumeTabs = () => {
  const resumeBtns = document.querySelectorAll(".resume-btn");
  const resumeDetails = document.querySelectorAll(".resume-detail");

  resumeBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      resumeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      resumeDetails.forEach((detail) => detail.classList.remove("active"));
      resumeDetails[idx].classList.add("active");
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initSectionNavigation();
  initResumeTabs();
});