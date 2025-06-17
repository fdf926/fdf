// carousel.js
const slidesContainer = document.querySelector('.carousel-slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = 320; // 每张图宽度 + 间距（300 + 20）

// 下一张
nextBtn.addEventListener('click', () => {
  const currentTransform = parseInt(getComputedStyle(slidesContainer).transform.split(',')[4]);
  const newTransform = currentTransform - slideWidth;
  const maxScroll = -(slidesContainer.scrollWidth - slidesContainer.clientWidth);
  if (newTransform >= maxScroll) {
    slidesContainer.style.transform = `translateX(${newTransform}px)`;
  }
});

// 上一张
prevBtn.addEventListener('click', () => {
  const currentTransform = parseInt(getComputedStyle(slidesContainer).transform.split(',')[4]);
  const newTransform = currentTransform + slideWidth;
  if (newTransform <= 0) {
    slidesContainer.style.transform = `translateX(${newTransform}px)`;
  }
});
