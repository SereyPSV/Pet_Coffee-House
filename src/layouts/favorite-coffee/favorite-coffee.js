import { sliders } from './slides/slides';

export const favoriteCoffeeBlock = () => {
  const favoriteCoffee = document.createElement('section');
  const favoriteCoffeeWrapper = document.createElement('div');
  const favoriteCoffeeTitle = document.createElement('div'); // - title
  const titleH2 = document.createElement('h2');
  const titleSpanFirst = document.createElement('span');
  const titleSpanAccent = document.createElement('span');
  const titleSpanSecond = document.createElement('span');

  favoriteCoffee.className = 'favorite-coffee';
  favoriteCoffee.id = 'favorite-coffee';
  favoriteCoffeeWrapper.className = 'wrapper wrapper__favorite-coffee';
  favoriteCoffeeTitle.className = 'favorite-coffee__title';
  titleSpanFirst.textContent = 'Choose your';
  titleSpanAccent.className = 'title_accent';
  titleSpanAccent.textContent = ' favorite ';
  titleSpanSecond.textContent = 'coffee';
  const slider = sliders();

  titleH2.append(titleSpanFirst, titleSpanAccent, titleSpanSecond);
  favoriteCoffeeTitle.append(titleH2);
  favoriteCoffeeWrapper.append(favoriteCoffeeTitle, slider);
  favoriteCoffee.append(favoriteCoffeeWrapper);

  return favoriteCoffee;
};
