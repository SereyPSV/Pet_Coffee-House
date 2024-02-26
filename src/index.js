import './styles.scss';

import { headerBlock } from './layouts/header/header';
import { favoriteCoffeeBlock } from './layouts/favorite-coffee/favorite-coffee';
import { aboutBlock } from './layouts/about/about';
import { mobileAppBlock } from './layouts/mobile-app/mobile-app';
import { footerBlock } from './layouts/footer/footer';

const body = document.body;

headerBlock(body);
favoriteCoffeeBlock(body);
aboutBlock(body);
mobileAppBlock(body);
footerBlock(body);
