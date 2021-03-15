let slider = document.querySelector('#sheet');
let innerSlider = document.querySelector('.musicSheet');

let pressed = false;
let startX;
let x;

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseenter', (e) => {
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {slider.style.cursor = 'grab'});

window.addEventListener('mouseup', () => {pressed = false});

slider.addEventListener('mousemove',(e)=>{
    if(!pressed) return;
    e.preventDefault();
    x= e.offsetX;
    innerSlider.style.left= `${x-startX}px`; 
});