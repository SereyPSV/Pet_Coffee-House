import urlMobileAppScreensImg from './img/mobile-screens.png';
import { MOBILE_APP_TEXT } from '../constants/constants';
import { insertSvg } from '../../utils/insert-svg';
import {
  iconAppStore,
  iconGooglePlay,
  textAppStore,
  textGooglePlay,
} from './utils/mobile-app-svg';

export const mobileAppBlock = (body) => {
  const mobileApp = document.createElement('section');
  const wrapperMobileApp = document.createElement('div');
  const mobileAppOffer = document.createElement('div');
  const offerTitle = document.createElement('h2');
  const offerText = document.createElement('p');
  const offerButtons = document.createElement('div');
  const offerTitleAccent = document.createElement('span');
  const offerTitleSpan = document.createElement('span');

  const linkAppStore = document.createElement('a');
  const buttonAppStore = document.createElement('button');
  const linkGooglePlay = document.createElement('a');
  const buttonGooglePlay = document.createElement('button');
  const mobileAppScreens = document.createElement('div');
  insertSvg(textAppStore, buttonAppStore);
  insertSvg(iconAppStore, buttonAppStore);
  insertSvg(textGooglePlay, buttonGooglePlay);
  insertSvg(iconGooglePlay, buttonGooglePlay);

  mobileApp.className = 'mobile-app';
  mobileApp.id = 'mobile-app';
  wrapperMobileApp.className = 'wrapper wrapper__mobile-app';
  mobileAppOffer.className = 'mobile-app__offer';
  offerTitle.className = 'offer__title';
  offerText.className = 'offer__text';
  offerButtons.className = 'offer__buttons';
  offerTitleAccent.className = 'title_accent';
  offerTitleAccent.textContent = 'Download ';
  offerTitleSpan.className = 'offer__title_span';
  offerTitleSpan.textContent = 'our apps to start ordering';
  offerText.textContent = MOBILE_APP_TEXT;
  linkAppStore.href = 'https://www.apple.com/app-store/';
  buttonAppStore.className = 'buttons_negative btn__app-store';
  linkGooglePlay.href = 'https://play.google.com/store/games?hl=ru&gl=US';
  buttonGooglePlay.className = 'buttons_negative btn__google-play';
  mobileAppScreens.className = 'mobile-app__screens';
  mobileAppScreens.style.background = `url(${urlMobileAppScreensImg}) center`;

  offerTitle.append(offerTitleAccent, offerTitleSpan);
  linkAppStore.append(buttonAppStore);
  linkGooglePlay.append(buttonGooglePlay);
  offerButtons.append(linkAppStore, linkGooglePlay);

  mobileAppOffer.append(offerTitle, offerText, offerButtons);
  wrapperMobileApp.append(mobileAppOffer, mobileAppScreens);
  mobileApp.append(wrapperMobileApp);
  return mobileApp;
};
