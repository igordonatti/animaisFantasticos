import { outsideClick } from './outsideClick.js';

export function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach((menu) => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        })
    })

    function handleClick(e) {
        e.preventDefault();
        this.classList.toggle('active');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active'); 
        })
    }
}