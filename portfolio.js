const mobile_nav = document.querySelector(".toggle-button");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}
mobile_nav.addEventListener('click', () => toggleNavbar());


// Smooth scrolling when clicking on navigation links

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    });
});


//   top button

function displayButton() {
    const button = document.querySelector('.btn');

    if (window.scrollY >= 400) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}


displayButton();
window.addEventListener('scroll', displayButton);

const button = document.querySelector('.btn');

button.addEventListener('click', function () {
    backToTop();
});

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}






