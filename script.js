let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteor');
let rocket = document.getElementById('roket');
let text = document.getElementById('text');
let tombol = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * 0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
    
})