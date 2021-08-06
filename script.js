
//variáveis para link de dropdown e do icone do menu
var link = window.document.querySelectorAll('.drop');
var icon_menu = window.document.querySelector('.fa-bars');

/*dropdown*/
link.forEach(element => {
    element.addEventListener('click', () => {
        let ul = element.nextElementSibling;
        ul.classList.toggle('active');
    });
});

//menu
icon_menu.addEventListener('click', () => {
    let ul_principal = window.document.getElementById('ul-principal');
    ul_principal.classList.toggle('active');

})
