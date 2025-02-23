const navMobile = document.querySelector('.nav__items-mobile');
const navBTN = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll('.nav__item--mobile');

const handleNavMobile = () => {
    navBTN.classList.toggle('is-active');
    navMobile.classList.toggle('nav__items-mobile--active');

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

document.addEventListener('DOMContentLoaded', function() {
    // Funkcja do obsługi animacji fade-in
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    // Konfiguracja Intersection Observer z większym marginesem
    const observerOptions = {
        root: null,
        rootMargin: '50px', // Zwiększony margines dla wcześniejszego triggera
        threshold: 0.1 // Zmniejszony próg dla wcześniejszej aktywacji
    };

    // Callback dla Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dodajemy małe opóźnienie dla płynniejszej animacji
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    };

    // Utworzenie obserwatora
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Rozpocznij obserwację wszystkich elementów
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

navBTN.addEventListener('click', handleNavMobile);