import { insertSVG, vectorLeft, vectorRight } from './slide-block/utils/utils';
import { slideBlock } from './slide-block/slide-block';

export const sliders = () => {
  let offset = 0;
  const slider = document.createElement('div'); // ---------------slider
  const sliderButtonLeft = document.createElement('button'); // -- button left
  const sliderButtonRight = document.createElement('button'); // - button right
  const sliderRow = document.createElement('div'); // ------------ slide row
  const sliderLine = document.createElement('div');

  slider.className = 'slider';
  sliderButtonLeft.className = 'buttons_negative button__icon-dark_left';
  sliderButtonRight.className = 'buttons_negative button__icon-dark_right';
  sliderRow.className = 'slider__row';
  sliderLine.className = 'slider__line';

  insertSVG(vectorLeft, sliderButtonLeft);
  insertSVG(vectorRight, sliderButtonRight);

  [2, 0, 1].map((slideN) => {
    const slide = slideBlock(slideN);
    sliderLine.append(slide);
  });
  sliderRow.append(sliderLine);
  slider.append(sliderButtonLeft, sliderRow, sliderButtonRight);

  sliderButtonLeft.addEventListener('click', () => {
    console.log('left');
    offset -= 480;
    checkBorder(offset);
    sliderLine.style.left = `${offset}px`;
  });
  sliderButtonRight.addEventListener('click', () => {
    console.log('right');
    offset += 480;
    checkBorder(offset);
    sliderLine.style.left = `${offset}px`;
  });

  function checkBorder(offset) {
    if (offset === -480) {
      sliderButtonLeft.disabled = true;
      sliderLine.children[2].className = 'slide__container';
      sliderLine.children[1].className = 'slide__container slide_hidden';
    } else if (offset === 0) {
      sliderButtonLeft.disabled = false;
      sliderButtonRight.disabled = false;
      sliderLine.children[0].className = 'slide__container slide_hidden';
      sliderLine.children[1].className = 'slide__container';
      sliderLine.children[2].className = 'slide__container slide_hidden';
    } else if (offset === 480) {
      sliderButtonRight.disabled = true;
      sliderLine.children[0].className = 'slide__container';
      sliderLine.children[1].className = 'slide__container  slide_hidden';
    }
  }
  return slider;
};
