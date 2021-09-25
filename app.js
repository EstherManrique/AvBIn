((d) => {
  /* ******** Slider ******** */

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
  }

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
  

  /* ******Menu Hamburger******  */
  const $btnMenu = d.querySelector(".nav-burger"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.classList.toggle("open");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $menu.classList.remove("is-active");
    $btnMenu.classList.remove("open")
  });
})(document);


/* ******** Modals - JSon ******** */

const dataServices = {
  inmuebles: {
    title: "Inmuebles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam sunt aperiam, suscipit, omnis alias quibusdam doloremque ipsa voluptatum error reprehenderit eveniet magni eaque cumque repudiandae harum? Eveniet, est tempora!",
  },
  "maquinaria-y-equipo": {
    title: "Maquinaria y Equipo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam sunt aperiam, suscipit",
  },
  "opinion-de-valor": {
    title: "Opinión de Valor",
    description:
      "Unde veniam sunt aperiam, suscipit, omnis alias quibusdam doloremque ipsa voluptatum error reprehenderit eveniet magni eaque cumque repudiandae harum? Eveniet, est tempora!",
  },
  "justipreciacion-de-rentas": {
    title: "Justipreciación de Rentas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam sunt aperiam, suscipit, omnis alias quibusdam doloremque ipsa voluptatum error reprehenderit eveniet magni eaque cumque repudiandae harum? Eveniet, est tempora!",
  },
  "avaluo-maestro": {
    title: "Avalúo Maestro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam sunt aperiam, suscipit, omnis alias quibusdam doloremque ipsa voluptatum error reprehenderit eveniet magni eaque cumque repudiandae harum? Eveniet, est tempora!",
  },
  "regimen-de-propiedad-en-condominio": {
    title: "Régimen de Propiedad en Condominio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam sunt aperiam, suscipit, omnis alias quibusdam doloremque ipsa voluptatum error reprehenderit eveniet magni eaque cumque repudiandae harum? Eveniet, est tempora!",
  },
  "negocios-en-marcha": {
    title: "Negocios en Marcha",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam sunt aperiam, suscipit, omnis alias quibusdam doloremque ipsa voluptatum error reprehenderit eveniet magni eaque cumque repudiandae harum? Eveniet, est tempora!",
  },
  "evaluacion-de-proyectos-inmobliarios": {
    title: "Evaluación de Proyectos Inmobiliarios",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam sunt aperiam, suscipit, omnis alias quibusdam doloremque ipsa voluptatum error reprehenderit eveniet magni eaque cumque repudiandae harum? Eveniet, est tempora!",
  },
  "estudios-de-factibilidad": {
    title: "Estudios de Factibilidad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam sunt aperiam, suscipit",
  },
  "analisis-de-inversion-inmobiliaria": {
    title: "Análisis de Inversión Inmobiliaria",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam sunt aperiam, suscipit, omnis alias quibusdam doloremque ipsa voluptatum error reprehenderit eveniet magni eaque cumque repudiandae harum? Eveniet, est tempora!",
  },
  "reexpresion-de-estados-financieros": {
    title: "Reexpresión de Estados Financieros",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam sunt aperiam, suscipit, omnis alias quibusdam doloremque ipsa voluptatum error reprehenderit eveniet magni eaque cumque repudiandae harum? Eveniet, est tempora!",
  },
};

const servicesButtons = document.querySelectorAll("[data-modal-id]");
if (servicesButtons.length) {
  const modal = document.querySelector(".cards-modals .modal");
  const modalClose = modal.querySelector(".icon-modal-close");
  const modalInfo = modal.querySelector(".modal-info");
  let modalContent = "";

  modalClose.addEventListener("click", () => {
    toggleModal(modal, 0, "none");
  });

  servicesButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let service = button.dataset.modalId;
      let serviceInfo = dataServices[service];
      modalContent = `<span class="icon-${service}"></span>
      <h2>${serviceInfo.title}</h2>
      <p>${serviceInfo.description}</p>`;
      modalInfo.innerHTML = "";
      modalInfo.insertAdjacentHTML("afterbegin", modalContent);
      toggleModal(modal, 1, "all");
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    let hash = window.location.hash;
    if (hash) {
      hash = hash.replace("#", "");
      const buttonHash = document.querySelector(
        '[data-modal-id="' + hash + '"]'
      );
      if (buttonHash) {
        buttonHash.click();
      }
    }
  });
}

const toggleModal = (modal, opacity, pointer) => {
  modal.style.opacity = opacity;
  modal.style.pointerEvents = pointer;
};

/* Acordeon */
const blocks = document.querySelectorAll(".acordion .block");
if (blocks.length) {
  blocks.forEach((block) => {
    const title = block.querySelector(".title");
    title.addEventListener("click", () => {
      if (block.classList.contains("active")) {
        block.classList.remove("active");
      } else {
        blocks.forEach((b) => {
          b.classList.remove("active");
        });
        block.classList.add("active");
      }
    });
  });
};
