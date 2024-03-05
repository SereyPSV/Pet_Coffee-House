import './styles.scss';

import { headerBlock } from './layouts/header/header';
import { heroBlock } from './layouts/hero/hero';
import { favoriteCoffeeBlock } from './layouts/favorite-coffee/favorite-coffee';
import { aboutBlock } from './layouts/about/about';
import { mobileAppBlock } from './layouts/mobile-app/mobile-app';
import { footerBlock } from './layouts/footer/footer';

const body = document.body;
const header = headerBlock();
const footer = footerBlock();

const main = document.createElement('main');
const hero = heroBlock();
const favoriteCoffee = favoriteCoffeeBlock();
const about = aboutBlock();
const mobileApp = mobileAppBlock();

const menu = menuBlock();

main.append(hero, favoriteCoffee, about, mobileApp);
body.append(header, main, footer);
