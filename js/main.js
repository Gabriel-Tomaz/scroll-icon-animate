const target = document.querySelector('.scroller');
const animateClass = 'scroller-animate';

function scrollAnimate(){
   //Capturando a distancia entre a barra de scroll e o topo da página; 
   const windowTop = window.pageYOffset;
   target.classList.add(animateClass);

   if(windowTop === 0){
    target.classList.remove(animateClass);
   }
}

window.addEventListener('scroll', () => {
    scrollAnimate();
});