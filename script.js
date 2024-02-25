let newIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

newIcon.onclick = () => {
    newIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections .forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });


        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);


        newIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');

};


        /*######################## scroll reveal ############################*/

 ScrollReveal({ 
     distance: '80px',
     duration:2000,
     delay:200,
});

 ScrollReveal().reveal('.home-content, heading',{origin:'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'button'});
 ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
 ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

 /*######################## Typed js ############################*/

 var typed = new Typed('.multiple-text', {
    strings: ["Fullstack Developer.", "Web Designer.", "App Designer."],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 900,
    loop: true,
  });

        