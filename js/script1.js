const navMobile = document.querySelector('.nav-mobile');
const navBTN = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll('.nav__link');

const handleNavMobile = () => {
    navBTN.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');

    handleNavAnimation()
}

const handleNavAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach((item) => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })

}

allNavItems.forEach(item => {
    item.addEventListener('click', handleNavMobile);
})

navBTN.addEventListener('click', handleNavMobile);