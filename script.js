// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{

    let header = document.querySelector('header');
    
    header.classList.toggle('sticky' , window.scrollY>100);
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}




ScrollReveal({
    reset: true,
    distance: '80px',
    duration: '2000',
    delay: '150'
});


ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.navbar', { origin:'right' });
ScrollReveal().reveal('.about-img', { origin:'left' });
ScrollReveal().reveal('.service-container, .projects-container, .big-container', { origin:'bottom' });