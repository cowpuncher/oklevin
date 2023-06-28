function ready() {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const topMenu = document.querySelector('.topMenu');
    const topPanel = document.querySelector('.topPanel');

    const closeMenu = (e) => {
        topPanel.closest('.topPanel').classList.toggle('active');
        topMenu.classList.toggle('active');
    }
 

    menu.addEventListener('click', e => {
        closeMenu(e);
    });
    overlay.addEventListener('click', e => {
        closeMenu(e);
    });
}

document.addEventListener("DOMContentLoaded", ready);