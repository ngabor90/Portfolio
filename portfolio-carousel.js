/**
 *
 * Drives the portfolio carousel: keeps the image slider, the active
 * project detail panel, and the arrow button states in sync.
 */

const initPortfolioCarousel = () => {
  const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
  const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");
  const slideCount = portfolioDetails.length;

  if (!arrowRight || !arrowLeft || !imgSlide || slideCount === 0) return;

  let activeIndex = 0;

  const render = () => {
    imgSlide.style.transform = `translateX(calc(${activeIndex * -100}% - ${activeIndex * 2}rem))`;

    portfolioDetails.forEach((detail) => detail.classList.remove("active"));
    portfolioDetails[activeIndex].classList.add("active");

    arrowLeft.classList.toggle("disabled", activeIndex === 0);
    arrowRight.classList.toggle("disabled", activeIndex === slideCount - 1);
  };

  arrowRight.addEventListener("click", () => {
    if (activeIndex < slideCount - 1) {
      activeIndex++;
      render();
    }
  });

  arrowLeft.addEventListener("click", () => {
    if (activeIndex > 0) {
      activeIndex--;
      render();
    }
  });

  render();
};

document.addEventListener("DOMContentLoaded", initPortfolioCarousel);