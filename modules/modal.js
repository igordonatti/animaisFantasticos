export function toggleModal() {
    const modal = document.querySelector('[data-modal="container"]');
    const buttonOpen = document.querySelector('[data-modal="abrir"]');
    const buttonClose = document.querySelector('[data-modal="fechar"]');
    
    if (modal && buttonOpen && buttonClose) {
        function toggleModal(e) {
            e.preventDefault();
            modal.classList.toggle("ativo")
        };
        function foraModal(e) {
            if (e.target === this) {
                toggleModal(e);
            }
        }

        buttonOpen.addEventListener('click', toggleModal);
        buttonClose.addEventListener('click', toggleModal);
        modal.addEventListener('click', foraModal);
    } 
}