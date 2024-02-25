import './styles.scss';

import { headerBlock } from './layouts/header/header';
import { favoriteCoffee } from './layouts/favorite-coffee/favorite-coffee';
import { about } from './layouts/about/about';

const body = document.body;

headerBlock(body);
favoriteCoffee(body);
about(body);
