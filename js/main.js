const target = document.querySelector('.scroller');
const animateClass = 'scroller-animate';

function scrollAnimate(){
   target.classList.add(animateClass);
}

window.addEventListener('scroll', () => {
    target.classList.remove(animateClass);
    scrollAnimate();
});