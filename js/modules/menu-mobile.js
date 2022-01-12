import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (eventos === undefined) {
      this.eventos = ["click"];
    } else {
      this.eventos = eventos;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add("active");
    this.menuList.classList.add("active");
    outsideClick(this.menuList, this.eventos, () => {
      this.menuButton.classList.remove("active");
      this.menuList.classList.remove("active");
    });
  }

  addMenuButtonEvents() {
    this.eventos.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuButtonEvents();
    }

    return this;
  }
}
