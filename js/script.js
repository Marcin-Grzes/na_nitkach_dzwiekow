const navMobile = document.querySelector('.nav__items-mobile');
const navBTN = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll('.nav__item--mobile');
const footerYear = document.querySelector('.footer__year')

const handleNavMobile = () => {
    navBTN.classList.toggle('is-active');
    navMobile.classList.toggle('nav__items-mobile--active');

    // Aktualizacja stanu aria-expanded
    const isExpanded = navBTN.getAttribute('aria-expanded') === 'true';
    navBTN.setAttribute('aria-expanded', !isExpanded);

    // Aktualizacja tekstu aria-label w zależności od stanu
    navBTN.setAttribute('aria-label', isExpanded ? 'Otwórz menu' : 'Zamknij menu');

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

const handleCurrentYear = () => {
    footerYear.innerText = (new Date()).getFullYear();
}
handleCurrentYear();