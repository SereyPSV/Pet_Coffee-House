import urlLogoLink from '../../assets/img/header/logo.svg';
import urlMenuButtonImg from '../../assets/img/header/State=default.svg';
import urlMenuButtonImgHov from '../../assets/img/header/State=hover.svg';
import { NAV_MENU, HERO_CONTENT } from '../constants/constants';

export const headerBlock = (body) => {
  const header = document.createElement('header');
  const headerWrapper = document.createElement('div');
  const headerMenu = document.createElement('div');
  const logoLink = document.createElement('a');
  const logoImg = document.createElement('img');
  const headerNav = document.createElement('nav');
  const navUl = document.createElement('ul');
  const menuButton = document.createElement('a');
  const menuButtonImg = document.createElement('img');
  const headerHero = document.createElement('div');
  const hero = document.createElement('div');
  const heroOffer = document.createElement('div');
  const heroOfferTitle = document.createElement('div');
  const titleH1 = document.createElement('h1');
  const titleSpanAccent = document.createElement('span');
  const titleSpan = document.createElement('span');
  const heroOfferContent = document.createElement('div');
  const heroOfferSpanContent = document.createElement('span');
  const heroOfferButton = document.createElement('button');

  header.className = 'header';
  headerWrapper.className = 'wrapper';
  headerMenu.className = 'header__menu';
  logoLink.href = '#';
  logoLink.className = 'logo';
  logoImg.src = urlLogoLink;
  logoImg.alt = 'Coffee House logo';
  headerNav.className = 'header__navigation';
  navUl.className = 'navigation';
  menuButton.className = 'menu__button';
  menuButton.href = '#';
  menuButtonImg.src = urlMenuButtonImg;
  menuButtonImg.alt = 'coffee-cup';
  headerHero.className = 'header__hero';
  hero.className = 'hero';
  heroOffer.className = 'hero__offer';
  heroOfferTitle.className = 'hero__offer_title';
  titleSpanAccent.className = 'title_accent';
  titleSpanAccent.textContent = 'Enjoy';
  titleSpan.textContent = 'premium coffee at our charming cafe';
  heroOfferContent.className = 'hero__offer_content';
  heroOfferSpanContent.textContent = HERO_CONTENT;
  heroOfferButton.className = 'buttons button-primary';
  heroOfferButton.textContent = 'Menu';
  NAV_MENU.map((item) => {
    const navLi = document.createElement('li');
    navLi.className = 'navigation__link';
    navLi.textContent = item;
    navUl.appendChild(navLi);
  });

  logoLink.append(logoImg);
  headerNav.append(navUl);
  menuButton.append(menuButtonImg);
  headerMenu.append(logoLink, headerNav, menuButton);

  titleH1.append(titleSpanAccent, titleSpan);
  heroOfferTitle.append(titleH1);
  heroOfferContent.append(heroOfferSpanContent);
  heroOffer.append(heroOfferTitle, heroOfferContent, heroOfferButton);
  hero.append(heroOffer);
  headerHero.append(hero);

  headerWrapper.append(headerMenu, headerHero);
  header.append(headerWrapper);
  body.append(header);
};

// const classes = [
//   { name: header, tag: 'header', className: 'header' },
//   { name: headerWrapper, tag: 'div', className: 'wrapper header__wrapper' },
//   { name: headerMenu, tag: 'div', className: 'header__menu' },
//   { name: logoLink, tag: 'a', className: 'logo', href: '#' },
//   { name: logoImg, tag: 'img', className: '', src: urlLogoLink },
//   { name: headerNav, tag: 'nav', className: 'header__navigation' },
//   { name: navUl, tag: 'ul', className: 'navigation' },
// ];
// classes.map((item) => {
//   item.name = document.createElement(item.tag);
//   item.name.className = item.className;
// });
