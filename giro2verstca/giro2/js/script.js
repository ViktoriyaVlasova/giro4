let click = document.querySelector('.click');
let orange = document.querySelector('.orange');


click.addEventListener('click', ()=> {
    click.classList.add('orange')
})

orange.addEventListener('click', ()=> {
    orange.classList.remove('orange')
})