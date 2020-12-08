const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

//set first image opacity
imgs[0].style.opacity = opacity;

//const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];

imgs.forEach(img => img.addEventListener('click', imgClick));
function imgClick(e){

    //reset the opacity of all images
    imgs.forEach(img => (img.style.opacity =1));

    //change current image to clicked image
    current.src = e.target.src;

    //add fadeIn class
    current.classList.add('fade-in');

    //remove fadeIn class after .5 sec 
    setTimeout(() => current.classList.remove('fade-in'),500);

    //change the opacity to opacity var
    e.target.style.opacity = opacity;
}