import urlCoffeeSlide_1 from '../../assets/img/favoriteCoffee/coffee-slider-1.png';
import urlCoffeeSlide_2 from '../../assets/img/favoriteCoffee/coffee-slider-2.png';
import urlCoffeeSlide_3 from '../../assets/img/favoriteCoffee/coffee-slider-3.png';
import urlControl from '../../assets/img/favoriteCoffee/control.svg';
import urlControlDark from '../../assets/img/favoriteCoffee/controlDark.svg';
import { SLIDE_DESCRIPTION } from '../constants/constants';

export const favoriteCoffee = (body) => {
  const favoriteCoffee = document.createElement('section');
  const favoriteCoffeeWrapper = document.createElement('div');
  const favoriteCoffeeTitle = document.createElement('div'); // --title
  const titleH2 = document.createElement('h2');
  const titleSpanFirst = document.createElement('span');
  const titleSpanAccent = document.createElement('span');
  const titleSpanSecond = document.createElement('span');
  const slider = document.createElement('div'); // --------slider
  const sliderButtonLeft = document.createElement('button');
  const vectorLeft = document.createElement('span');
  const sliderRow = document.createElement('div');
  const sliderContent = document.createElement('div');
  const imgSlide_1 = document.createElement('img');
  const slideDescTitle1 = document.createElement('h3');
  const slideDescText1 = document.createElement('p');
  const slideDescPrise1 = document.createElement('h3');
  const sliderButtonRight = document.createElement('button');
  const vectorRight = document.createElement('span');
  const sliderControls = document.createElement('div'); // ---slider control
  const imgControl1 = document.createElement('img');
  const imgControl2 = document.createElement('img');
  const imgControl3 = document.createElement('img');

  favoriteCoffee.className = 'favorite-coffee';
  favoriteCoffeeWrapper.className = 'wrapper wrapper__favorite-coffee';
  favoriteCoffeeTitle.className = 'favorite-coffee__title';
  titleSpanFirst.textContent = 'Choose your';
  titleSpanAccent.className = 'title_accent';
  titleSpanAccent.textContent = ' favorite ';
  titleSpanSecond.textContent = 'coffee';
  slider.className = 'slider';
  sliderButtonLeft.className = 'button__icon-dark button__icon-dark_left';
  vectorLeft.className = 'vector_left';
  sliderRow.className = 'slider__row';
  sliderContent.className = 'slider__content';
  imgSlide_1.src = urlCoffeeSlide_1;
  slideDescTitle1.className = 'slide-description__title';
  slideDescTitle1.textContent = 'S’mores Frappuccino';
  slideDescText1.style.textAlign = 'center';
  // eslint-disable-next-line operator-linebreak
  slideDescText1.textContent = SLIDE_DESCRIPTION;
  slideDescPrise1.className = 'slide-description__price';
  slideDescPrise1.textContent = '$5.50';
  sliderButtonRight.className = 'button__icon-dark button__icon-dark_right';
  vectorRight.className = 'vector_right';
  sliderControls.className = 'slider__controls';
  imgControl1.src = urlControlDark;
  imgControl2.src = urlControl;
  imgControl3.src = urlControl;

  titleH2.append(titleSpanFirst, titleSpanAccent, titleSpanSecond);
  favoriteCoffeeTitle.append(titleH2);

  sliderControls.append(imgControl1, imgControl2, imgControl3);
  sliderButtonLeft.append(vectorLeft);
  sliderContent.prepend(imgSlide_1);
  sliderRow.append(
    sliderContent,
    slideDescTitle1,
    slideDescText1,
    slideDescPrise1,
    sliderControls,
  );
  sliderButtonRight.append(vectorRight);
  slider.append(sliderButtonLeft, sliderRow, sliderButtonRight);

  favoriteCoffeeWrapper.append(favoriteCoffeeTitle, slider);
  favoriteCoffee.append(favoriteCoffeeWrapper);
  body.append(favoriteCoffee);
};
