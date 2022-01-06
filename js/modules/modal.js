export default class Modal {
  constructor(modal, buttonOpen, buttonClose) {
    this.modal = document.querySelector(modal);
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.foraModal = this.foraModal.bind(this);
  }

  toggleModal() {
    this.modal.classList.toggle("ativo");
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  foraModal(e) {
    if (e.target === this.modal) {
      this.toggleModal(e);
    }
  }

  addModalEvents() {
    this.buttonOpen.addEventListener("click", this.eventToggleModal);
    this.buttonClose.addEventListener("click", this.eventToggleModal);
    this.modal.addEventListener("click", this.foraModal);
  }

  init() {
    if (this.modal && this.buttonOpen && this.buttonClose) {
      this.addModalEvents();
    }

    return this;
  }
}
