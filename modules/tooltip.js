export function initTooltip() {
    
    const tooltips = document.querySelectorAll('[data-tooltip]');

    function onMouseOver(e) {
        const tooltipBox = criaTooltipBox(this);
        
        onMouseMove.tooltipBox = tooltipBox;
        onMouseMove.element = this;
        this.addEventListener('mousemove', onMouseMove);

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
    }

    function criaTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');

        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);

        return tooltipBox;
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }

    const onMouseMove = {
        handleEvent(e) {
            this.tooltipBox.style.top = e.pageY + 20 + 'px';
            this.tooltipBox.style.left = e.pageX + 20 + 'px';
            
        }
    }

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    })
}

