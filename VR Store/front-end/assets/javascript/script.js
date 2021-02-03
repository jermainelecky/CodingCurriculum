function openMobileNav() {
    let mobileNav = document.getElementById("mobile-links");
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "flex";
    } else {
        mobileNav.style.display = "none";
    }
}