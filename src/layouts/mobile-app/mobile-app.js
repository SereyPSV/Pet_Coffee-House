import urlIconAppStore from '../../assets/img/mobile-app/icon-app-store.svg';
import urlTextAppStore from '../../assets/img/mobile-app/text-app-store.svg';
import urlIconGooglePlay from '../../assets/img/mobile-app/icon-google-play.svg';
import urlTextGooglePlay from '../../assets/img/mobile-app/text-google-play.svg';
import urlMobileAppScreensImg from '../../assets/img/mobile-app/mobile-screens.png';
import { MOBILE_APP_TEXT } from '../constants/constants';

const iconAppStore = new Image();
const textAppStore = new Image();
const iconGooglePlay = new Image();
const textGooglePlay = new Image();
iconAppStore.src = urlIconAppStore;
textAppStore.src = urlTextAppStore;
iconGooglePlay.src = urlIconGooglePlay;
textGooglePlay.src = urlTextGooglePlay;

export function mobileAppBlock(body) {
  const mobileApp = document.createElement('section');
  const wrapperMobileApp = document.createElement('div');
  const mobileAppOffer = document.createElement('div');
  const offerTitle = document.createElement('h2');
  const offerText = document.createElement('p');
  const offerButtons = document.createElement('div');
  const offerTitleAccent = document.createElement('span');
  const offerTitleSpan = document.createElement('span');
  const buttonAppStore = document.createElement('button');
  const buttonGooglePlay = document.createElement('button');
  const mobileAppScreens = document.createElement('div');

  mobileApp.className = 'mobile-app';
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
  buttonAppStore.className = 'buttons btn__app-store';
  buttonGooglePlay.className = 'buttons btn__google-play';
  mobileAppScreens.className = 'mobile-app__screens';
  mobileAppScreens.style.background = `url(${urlMobileAppScreensImg}) center`;

  offerTitle.append(offerTitleAccent, offerTitleSpan);

  buttonAppStore.append(iconAppStore, textAppStore);
  buttonGooglePlay.append(iconGooglePlay, textGooglePlay);
  offerButtons.append(buttonAppStore, buttonGooglePlay);

  mobileAppOffer.append(offerTitle, offerText, offerButtons);
  wrapperMobileApp.append(mobileAppOffer, mobileAppScreens);
  mobileApp.append(wrapperMobileApp);
  body.append(mobileApp);
}
