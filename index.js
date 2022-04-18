let carouselContainer = document.querySelector('.carousel').children;
let next = document.querySelectorAll('.next');
let prev = document.querySelectorAll('.prev');
const totalCarousel = carouselContainer.length;

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