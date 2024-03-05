import { HERO_CONTENT } from '../constants/constants';
import { cup, insertSVG, menu } from './utils/utils';
import heroBackgroundSrc from './img/img-hero.jpg';

export const heroBlock = () => {
  const hero = document.createElement('section');
  const heroWrapper = document.createElement('div');
  const heroBackgroundImg = document.createElement('img');
  const heroOffer = document.createElement('div');
  const heroOfferTitle = document.createElement('div');
  const titleH1 = document.createElement('h1');
  const titleSpanAccent = document.createElement('span');
  const titleSpan = document.createElement('span');
  const heroOfferContent = document.createElement('div');
  const heroOfferSpanContent = document.createElement('span');
  const heroOfferButton = document.createElement('button');
  insertSVG(`${menu + cup}`, heroOfferButton);

  hero.className = 'hero';
  heroWrapper.className = 'wrapper hero__wrapper';
  heroBackgroundImg.className = 'hero-wrapper__background';

  heroOffer.className = 'hero__offer';
  heroOfferTitle.className = 'hero__offer_title';
  titleSpanAccent.className = 'title_accent';
  titleSpanAccent.textContent = 'Enjoy ';
  titleSpan.textContent = 'premium coffee at our charming cafe';
  heroOfferContent.className = 'hero__offer_content';
  heroOfferSpanContent.textContent = HERO_CONTENT;
  heroOfferButton.className = 'buttons hero__offer_button';

  heroBackgroundImg.src = heroBackgroundSrc;
  titleH1.append(titleSpanAccent, titleSpan);
  heroOfferTitle.append(titleH1);
  heroOfferContent.append(heroOfferSpanContent);
  heroOffer.append(heroOfferTitle, heroOfferContent, heroOfferButton);
  heroWrapper.append(heroBackgroundImg, heroOffer);
  hero.append(heroWrapper);
  return hero;
};
