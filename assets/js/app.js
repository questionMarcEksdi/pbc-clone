
// changing the banner when the breakpoint hits 768 pixels

window.addEventListener('resize', changeBanner)

function changeBanner(){
    if (window.innerWidth > 768){

        document.querySelector('.banner__img').src = "/assets/images/02_05_PBC_WebBanner.jpg";

        document.querySelectorAll('.social-links i')[0].classList.add('fa-3x')
        document.querySelectorAll('.social-links i')[1].classList.add('fa-3x')
        document.querySelectorAll('.social-links i')[2].classList.add('fa-3x')
        document.querySelectorAll('.social-links i')[3].classList.add('fa-3x')

    } else {
        document.querySelector('.banner__img').src = "/assets/images/mobile/02_05_PBC_WebBanner_Mobile.jpg";

        document.querySelectorAll('.social-links i')[0].classList.remove('fa-3x')
        document.querySelectorAll('.social-links i')[1].classList.remove('fa-3x')
        document.querySelectorAll('.social-links i')[2].classList.remove('fa-3x')
        document.querySelectorAll('.social-links i')[3].classList.remove('fa-3x')
     }
    
}

changeBanner();

// toggle hide/show mobile nav

let btnMenu = document.querySelector('.hamburger-menu');
let menuList = document.querySelector('.nav-primary')

btnMenu.addEventListener('click', function(){
    menuList.classList.add('show-nav')
})


let btnClose = document.querySelector('.btn-close')
btnClose.addEventListener('click', function(){
    menuList.classList.remove('show-nav')
})