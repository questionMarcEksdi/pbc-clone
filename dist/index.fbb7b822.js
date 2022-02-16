// changing the banner when the breakpoint hits 768 pixels
window.addEventListener('resize', changeBanner);
function changeBanner() {
    if (window.innerWidth > 768) document.querySelector('.banner__img').src = "/assets/images/02_05_PBC_WebBanner.jpg";
    else document.querySelector('.banner__img').src = "/assets/images/mobile/02_05_PBC_WebBanner_Mobile.jpg";
}

//# sourceMappingURL=index.fbb7b822.js.map
