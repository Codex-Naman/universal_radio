// Filter Radios by Category
function filterCategory(category) {
    const radios = document.querySelectorAll('.radio-item');
    radios.forEach(radio => {
        if (category === 'all' || radio.getAttribute('data-category') === category) {
            radio.style.display = 'block';
        } else {
            radio.style.display = 'none';
        }
    });

    // Highlight the active category button
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="filterCategory('${category}')"]`).classList.add('active');
}

// Search Radios by Brand or Model
function filterRadios() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const radios = document.querySelectorAll('.radio-item');
    radios.forEach(radio => {
        const text = radio.querySelector('h3').textContent.toLowerCase();
        if (text.includes(searchValue)) {
            radio.style.display = 'block';
        } else {
            radio.style.display = 'none';
        }
    });
}
