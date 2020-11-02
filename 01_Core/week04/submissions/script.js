var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function openMobileNav() {
    let mobileNav = document.getElementById("mobile-links");
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "flex";
    } else {
        mobileNav.style.display = "none";
    }
}