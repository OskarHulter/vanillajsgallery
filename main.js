const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // Change current img to src of clicked img
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class after
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change opacity
    e.target.style.opacity = opacity;
}
