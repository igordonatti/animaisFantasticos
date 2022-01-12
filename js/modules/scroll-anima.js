import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.72;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Pega a distância de cada item em relacao ao
  // topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distância de cada item em relação
  // ao topo do site
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add("ativo");
        this.stop();
      }
      // else if (section.classList.contains('ativo'))
      //     section.element.classList.remove('ativo')
      // no curso ele coloca esse else if, porem prefiro sem, mais clean
      // e bonito
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }

    return this;
  }

  // funcao adaptada por mim para desativar o event listener
  // sempre que a pagina ja tiver carregada por completa, ou seja
  // todas as sections abertas.
  stop() {
    let todosAtivos = true;
    this.distance.forEach((section) => {
      if (!section.element.classList.contains("ativo")) {
        todosAtivos = false;
      }
    });
    if (todosAtivos) {
      window.removeEventListener("scroll", this.checkDistance);
    }
  }
}
