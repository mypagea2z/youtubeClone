const menuButton = document.querySelectorAll('.menu-button');
const screenOverlay = document.querySelector('.screen-overlay');
const themeButton = document.querySelector('.theme-button');


themeButton.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
});

// toggle sidebar visibility when menu-button is cicked
menuButton.forEach( function(button) {
    button.addEventListener('click', function(){
        document.body.classList.toggle('sidebar-hidden');
    });
});


// Toogle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener('click', function(){
    document.body.classList.toggle('sidebar-hidden');
});

// Show sidebar on large screens by default
if (window.innerWidth >= 768){
    document.body.classList.remove('sidebar-hidden');
}