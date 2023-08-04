const images = document.querySelectorAll('.wrapper .image img');
const prevBtn = document.querySelector('.control.prev');
const nextBtn = document.querySelector('.control.next');
const closeBtn = document.querySelector('.control.close');
const gallery = document.querySelector('.gallery');
const galleryImage = gallery.querySelector('.gallery__inner img');
const loading = document.querySelector('#loading');

let currentIndex = 0;

function showGallery(index){
    gallery.classList.remove('hide');
    galleryImage.src = images[index].src;
}

function hideGallery(){
    gallery.classList.add('hide');
}

images.forEach((image, index) => {
    image.addEventListener('click',function(){
        currentIndex = index;
        showGallery(index);
    })
})

closeBtn.addEventListener('click',function(){
    hideGallery();
})

nextBtn.addEventListener('click',function(){
    if(currentIndex === images.length - 1)
        currentIndex = 0;
    else
        currentIndex++;
    showGallery(currentIndex);
})

prevBtn.addEventListener('click',function(){
    if(currentIndex===0)
        currentIndex = images.length-1;
    else
        currentIndex--;
    showGallery(currentIndex);
})

document.addEventListener('keydown',function(e){
    if(e.keyCode === 27)
        hideGallery();
})

// Load page
document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        loading.style.display = "none";
    },2000);
})