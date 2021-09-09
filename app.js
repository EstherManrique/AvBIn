/* ******** Menú ******** */
((d) => {
  /* ******** Slider ******** */

  // armar peda
  const slider = d.querySelector("#hero-slider");
  if (slider) {
    let sliderSection = d.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    const btnLeft = d.querySelector("#btn-left");

    const btnRight = d.querySelector("#btn-right");

    slider.insertAdjacentElement("afterbegin", sliderSectionLast);

    if (btnRight) {
      btnRight.addEventListener("click", () => {
        Next(d, slider);
      });
    }

    if (btnLeft) {
      btnLeft.addEventListener("click", () => {
        Previus(d, slider);
      });
    }

    /* Para que el slider sea automatico */
    /*   setInterval(function() {
      Next();
    }, 5000); */
  }

  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

const Next = (d, slider) => {
  let sliderSectionFirst = d.querySelectorAll(".slider-section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

const Previus = (d, slider) => {
  let sliderSection = d.querySelectorAll(".slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0%";
  slider.style.transition = "all 0.5s";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}
