let newIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classlist.toggle( 'fa-xmark');
    navbar.classList.toggle('active')
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections .forEach(sec => {
            let top = widow.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach.apply(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
                });
            };
        });


        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);


        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');

};