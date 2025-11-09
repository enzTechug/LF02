document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if the button and menu exist on the page
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class to show/hide the menu
            mobileMenu.classList.toggle('hidden');
        });
    }
});