let mainHeader = document.querySelector('.main-header');
const footerCards = document.querySelectorAll('.ft-text-holder');
const holderTitle = document.querySelectorAll('.holder-title');
const navMenuOpen = document.querySelector('.menu');
const navExit = document.querySelector('.nav-exit');
const sideNavbar = document.querySelector('.side-navbar');
const sideMenu = document.querySelector('.side-menu');
const navHolders = document.querySelectorAll('.side-holder');
const panelNavbar = document.querySelector('.panel-navbar');
// *******************************************************************************************************************************

const checkBlock = () => {
    let check = document.querySelectorAll('.nav-block');
    if (check.length < 1) {
        sideNavbar.classList.remove('nav-overflow');
    }
}
const removeNavigation = () => {
    panelNavbar.classList.remove('nav-panel');
    sideNavbar.classList.remove('open-navbar');
}
navMenuOpen.addEventListener('click', () => {
    panelNavbar.classList.add('nav-panel');
    sideNavbar.classList.add('open-navbar');
})
panelNavbar.addEventListener('click', e => {
    if (e.target.classList.contains('exit-icon')) {
        removeNavigation();
    } else if (e.target.classList.contains('panel-navbar')) {
        removeNavigation();
    }
})
sideMenu.addEventListener('click', e => {
    if (e.target.className === 'list-text') {
        e.target.nextElementSibling.classList.toggle('nav-block');
        sideNavbar.classList.add('nav-overflow');
        checkBlock();
    }
})
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop < 1) {
        mainHeader.classList.add('nav-background');
    }
    else if (document.documentElement.scrollTop > 1) {
        mainHeader.classList.remove('nav-background');
    }
});
const eachCard = () => {
    holderTitle.forEach(item => {
        item.classList.remove('hide-card-line');
        item.children[1].classList.remove('rotate-icon');
        item.nextElementSibling.classList.remove('ft-card-show')
    })
}
footerCards.forEach(card => {
    card.addEventListener('click', e => {
        if (!e.target.nextElementSibling.classList.contains('ft-card-show')) {
            eachCard();
        }
        e.target.classList.toggle('hide-card-line');
        e.target.children[1].classList.toggle('rotate-icon');
        e.target.nextElementSibling.classList.toggle('ft-card-show');
    })
})

