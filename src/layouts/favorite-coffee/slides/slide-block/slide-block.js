import { SLIDE } from './utils/slide-content';
import { sliderControl } from './utils/utils';

export const slideBlock = (slideN) => {
  const sliderContainer = document.createElement('div');
  const sliderContent = document.createElement('div');
  const slideImg = document.createElement('img');
  const slideDescTitle = document.createElement('h3');
  const slideDescText = document.createElement('p');
  const slideDescPrise = document.createElement('h3');
  const sliderControls = document.createElement('div'); // ------- slider control

  if (slideN === 0) {
    sliderContainer.className = 'slide__container';
  } else {
    sliderContainer.className = 'slide__container slide_hidden';
  }

  sliderContent.className = 'slide__content';
  slideImg.src = SLIDE[slideN].image;
  slideDescTitle.className = 'slide-description__title';
  slideDescTitle.textContent = SLIDE[slideN].title;
  slideDescText.style.textAlign = 'center';
  slideDescText.textContent = SLIDE[slideN].description;
  slideDescPrise.className = 'slide-description__price';
  slideDescPrise.textContent = SLIDE[slideN].price;
  sliderControls.className = 'slider__controls';
  sliderContent.prepend(slideImg);
  sliderControl(slideN, sliderControls);
  sliderContainer.append(
    sliderContent,
    slideDescTitle,
    slideDescText,
    slideDescPrise,
    sliderControls,
  );
  return sliderContainer;
};
