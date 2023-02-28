var headerMenu = document.getElementsByClassName('header-menu')[0];
var openButton = document.getElementById('open-button');
var closeButton = document.getElementById('close-button');

function clickMenu() {
    if (openButton.style.display == 'none') {
        openButton.style.display = 'block'
    } else {
        openButton.style.display = 'none'
    }

    if (closeButton.style.display == 'block') {
        closeButton.style.display = 'none'
    } else {
        closeButton.style.display = 'block'
    }

    if (headerMenu.style.display == 'block') {
        headerMenu.style.display = 'none'
    } else {
        headerMenu.style.display = 'block'
    }
}

function changeSize() {
    if (window.innerWidth >= 768) {
        openButton.style.display = 'none'
        closeButton.style.display = 'none'
        headerMenu.style.display = 'block'
    } else {
        openButton.style.display = 'block'
        closeButton.style.display = 'none'
        headerMenu.style.display = 'none'
    }
}