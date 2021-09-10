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
};

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
};

/* Json */

const dataServices = {
  "inmuebles": {
    icon: "",
    title: "Inmuebles",
    description: "dggdhhfhfjdjdfj",
  },
  "maquinaria-y-equipo": {
    icon: "",
    title: "Maquinaria y Equipo",
    description: "dggdhhfhfjdjdfj",
  },
  "negocios-en-marcha": {
    icon: "",
    title: "Negocios En Marcha",
    description: "dggdhhfhfjdjdfj",
  },
  "estudios-de-factibilidad": {
    icon: "",
    title: "Estudios De Factibilidad",
    description: "dggdhhfhfjdjdfj",
  },
  "evaluacion-de-proyectos-inmobliarios": {
    icon: "",
    title: "Evaluación de Proyectos Inmobiliarios",
    description: "dggdhhfhfjdjdfj",
  },
  "analisis-de-inversion-inmobiliaria": {
    icon: "",
    title: "Análisis de Inversión Inmobiliaria",
    description: "dggdhhfhfjdjdfj",
  },
  "reexpresion-de-estados-financieros": {
    icon: "",
    title: "Reexpresión de Estados Financieros",
    description: "dggdhhfhfjdjdfj",
  },
  "avaluo-maestro": {
    icon: "",
    title: "Avalúo Maestro",
    description: "dggdhhfhfjdjdfj",
  },
  "justipreciacion-de-rentas": {
    icon: "",
    title: "Justipreciación de Rentas",
    description: "dggdhhfhfjdjdfj",
  },
  "opinion-de-valor": {
    icon: "",
    title: "Opinión de Valor",
    description: "dggdhhfhfjdjdfj",
  },
  "regimen-de-propiedad-en-condominio": {
    icon: "",
    title: "Régimen de Propiedad en Condominio",
    description: "dggdhhfhfjdjdfj",
  },
};

const servicesButtons = document.querySelectorAll("[data-modal-id]");
if (servicesButtons.length) {
  const modal = document.querySelector(".cards-modals .modal");
  const modalClose = modal.querySelector(".icon-modal-close");
  const modalInfo = modal.querySelector(".modal-info");
  let modalContent = "";

  modalClose.addEventListener("click", () => {
    toggleModal(modal, "none");
  })
  
  servicesButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let service = button.dataset.modalId;
      let serviceInfo = dataServices[service];
      modalContent = `<span class="icon-${ service }"></span>
      <h2>${ serviceInfo.title }</h2>
      <p>${ serviceInfo.description }</p>`
      modalInfo.innerHTML = "";
      modalInfo.insertAdjacentHTML("afterbegin", modalContent)
      toggleModal(modal, "flex")
    });
  });
}

const toggleModal = (modal, display) => {
  modal.style.display = display;
}