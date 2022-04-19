let carouselContainer = document.querySelector('.carousel').children;
let next = document.querySelectorAll('.next');
let prev = document.querySelectorAll('.prev');
const totalCarousel = carouselContainer.length;
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const closeWrapper = document.querySelector('.close-cover');
const mobileNavigation = document.querySelector('.ul');

menu.addEventListener('click', () => {
  mobileNavigation.style.display = 'flex';
  closeWrapper.style.display = 'block';
  
});

close.addEventListener('click', () => {
  mobileNavigation.style.display = 'none';
  // close.style.display = 'none';
});

let index = 0;
// let newIndex = 0;

// prev.addEventListener('click', () => {
//   nextImage('next');
// })
console.log(prev);
// next.addEventListener('click', () => {
//   nextImage('prev');
// })

for (let i = 0; i < prev.length; i++) {
  prev[i].addEventListener('click', () => {
    nextImage('next');
  })

};

for (let i = 0; i < next.length; i++) {
  next[i].addEventListener('click', () => {
    nextImage('prev');
  })

};

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalCarousel) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalCarousel - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < carouselContainer.length; i++) {
    carouselContainer[i].classList.remove('block');
  }
  carouselContainer[index].classList.add('block');
}