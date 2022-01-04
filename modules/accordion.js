export default function initAccordion() {
  const accordioniList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  const activeClass = "ativo";

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordioniList.length) {
    accordioniList[0].classList.add(activeClass);
    accordioniList[0].nextElementSibling.classList.add(activeClass);

    accordioniList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
