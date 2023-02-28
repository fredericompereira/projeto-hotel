var botaoAbrir = document.getElementsByClassName(botao-abrir);
var botaoFechar = document.getElementsByClassName(botao-fechar);
var menuSite = document.getElementsByClassName(menu-site);

function abrirMenu() {
    if (menuSite.style.display == 'none') {
        menuSite.style.display = 'block'
    } else {
        menuSite.style.display = 'none'
    }
}