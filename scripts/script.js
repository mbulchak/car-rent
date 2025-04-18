document.addEventListener("DOMContentLoaded", () => {
  const mainContentFirst = document.querySelector(".main__block__first");
  const extras = document.querySelector(".extras");
  const insurances = document.querySelector(".insurances");
  const confirmingOrder = document.querySelector(".confirming__order");
  const buttonMain = document.querySelector(".button__main--1");

  const processCar = document.querySelector(".process__car");
  const processCarBlock = document.querySelector(".process__car__info");
  const processLinesSecond = document.querySelectorAll(".process__line--2");
  const processLinesThird = document.querySelectorAll(".process__line--3");
  const processImagesAll = document.querySelectorAll(".process__image");

  let count = 0;

  buttonMain.addEventListener("click", processCarPayment);

  function processCarPayment() {
    if (window.innerWidth <= 1500) {
      mainContentFirst.style.display = "none";
      processCar.style.display = "flex";
      extras.style.display = "flex";
      buttonMain.innerHTML = "Continue";

      count++;

      if (count === 2) {
        extras.style.display = "none";
        insurances.style.display = "flex";

        processLinesSecond.forEach(
          (line) => (line.style.backgroundColor = "#B68867")
        );

        processImagesAll[0].src = "./images/descr-2/completed_progress.png";
        processImagesAll[1].src = "./images/descr-2/indicator.png";
        processImagesAll[1].classList.remove("process__image--gray");
      }

      if (count === 3) {
        extras.style.display = "none";
        insurances.style.display = "none";

        confirmingOrder.style.display = "flex";
        buttonMain.style.display = "none";
        processCarBlock.style.display = "none";
        processCar.style.paddingBottom = "0";

        processLinesThird.forEach(
          (line) => (line.style.backgroundColor = "#B68867")
        );

        processImagesAll[1].src = "./images/descr-2/completed_progress.png";
        processImagesAll[2].src = "./images/descr-2/indicator.png";
        processImagesAll[2].classList.remove("process__image--gray");
      }
    }
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1500) {
      processCar.style.display = "none";
      mainContentFirst.style.display = "block";

      if (count === 2) {
        extras.style.display = "flex";
      }

      if (count === 3) {
        extras.style.display = "flex";
        insurances.style.display = "flex";
      }
    } else if (count > 0) {
      processCar.style.display = "flex";
      mainContentFirst.style.display = "none";

      if (count === 2) {
        extras.style.display = "none";
      }

      if (count === 3) {
        extras.style.display = "none";
        insurances.style.display = "none";
      }
    }
  });
});
