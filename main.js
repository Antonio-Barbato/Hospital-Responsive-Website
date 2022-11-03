const navItems = document.querySelector('#nav__items')
const openNavBtn = document.querySelector('#open__nav-btn')
const closeNavBtn = document.querySelector('#close__nav-btn')

openNavBtn.addEventListener('click' , () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block'
})

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none'    
}
closeNavBtn.addEventListener('click' , closeNav);


//andiamo a creare il codice per chiudere il menu al click di un link
if(window.innerWidth < 1024){
    document.querySelectorAll('#nav__items li a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeNav()
        })
    })
}


//Cambiamo il colore della nav quando scrolliamo in base le sections, e andiamo anche a modificarlo nello style di nav partial
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


//codice relative alle slide della sezione testimonials
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    //responsive breakpoints
    breakpoints: {
        //when window width is >= 600px
        600: {
            slidesPerView: 2
        },
        //when window width is >= 1024
        1024: {
            slidesPerView: 3
        }
    }
});