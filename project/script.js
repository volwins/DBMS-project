document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const siteTitle = document.querySelector('.site-title');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
        siteTitle.style.opacity = '0'; 
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
        siteTitle.style.opacity = '1';
    });
});
