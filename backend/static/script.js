document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.querySelector('.tooltip');
    const continents = document.querySelectorAll('.continent');

    continents.forEach(continent => {
        continent.addEventListener('mouseover', function(e) {
            tooltip.innerText = this.dataset.title;
            tooltip.style.top = e.clientY + 'px';
            tooltip.style.left = e.clientX + 'px';
            tooltip.style.display = 'block';
        });

        continent.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });
});

