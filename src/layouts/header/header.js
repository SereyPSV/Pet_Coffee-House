import { NAV_MENU } from '../constants/constants';
import { insertSVG, logoSvg, menu } from './utils/utils';

export const headerBlock = () => {
  const header = document.createElement('header');
  const headerWrapper = document.createElement('div');
  const headerMenu = document.createElement('div');
  const logoLink = document.createElement('a');
  insertSVG(logoSvg, logoLink);
  const headerNav = document.createElement('nav');
  const navUl = document.createElement('ul');
  const menuButton = document.createElement('a');
  insertSVG(menu, menuButton);
  const menuButtonSvg = menuButton.querySelector('line');
  menuButtonSvg.setAttribute('x1', '0');
  menuButtonSvg.setAttribute('x2', '72');

  header.className = 'header';
  headerWrapper.className = 'wrapper header__wrapper';
  headerMenu.className = 'header__menu';
  logoLink.href = '/';
  logoLink.className = 'logo';
  headerNav.className = 'header__navigation';
  navUl.className = 'navigation';
  menuButton.className = 'menu__button';
  menuButton.href = '#';

  NAV_MENU.map(({ title, link }) => {
    const navLink = document.createElement('a');
    const navLi = document.createElement('li');
    navLink.href = `#${link}`;
    navLi.className = 'navigation__link';
    navLi.textContent = title;
    navLink.append(navLi);
    navUl.appendChild(navLink);
  });

  headerNav.append(navUl);
  headerMenu.append(logoLink, headerNav, menuButton);
  headerWrapper.append(headerMenu);
  header.append(headerWrapper);

  return header;
};
