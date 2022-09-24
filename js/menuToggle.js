// $("#menuToggle").click(function(e){
//     $("#mainNav .mainNavBar").stop(true, true).slideToggle();
// });

const btnCircle = document.querySelector('.btn-circle');
const circleMenu = document.querySelector('.circle-menu');


btnCircle.addEventListener('click', () => {

    btnCircle.classList.toggle('menu-anim');
    circleMenu.classList.toggle('circle-anim');
    

})