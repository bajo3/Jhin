const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-list li a');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuList.classList.remove('active');
    });
});
