function dodajStavku(tekst){
    element = '<li class="list-item"><span>' + tekst + '</span><button class="btn">&times;</button></li>'
    document.querySelector('ul').insertAdjacentHTML('afterbegin',element);
}
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    var tekst = document.querySelector('input').value;
    if(tekst){
        dodajStavku(tekst)
    }
    event.target.reset();
});

// event delegation
document.querySelector('ul').addEventListener('click',function(event){
    var elem
    if(event.target.matches('button')){
        elem = event.target.parentNode;
        elem.parentNode.removeChild(elem);
    }
    if(event.target.matches('li')){
        elem = event.target;
        elem.classList.add('done');
    }
})