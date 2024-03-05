import { insertSvg } from '../../utils/insert-svg';
import { clock, facebook, instagram, phone, pinAlt, twitter } from './utils/svg';

export const footerBlock = () => {
  const footer = document.createElement('footer');
  const footerWrapper = document.createElement('div');

  const footerOffer = document.createElement('div');
  const offerTitle = document.createElement('h2');
  const offerSocials = document.createElement('div');
  const offerTitleAccent = document.createElement('span');
  const offerTitleSpan = document.createElement('span');
  const offerButtonTwitter = document.createElement('a');
  const offerButtonInstagram = document.createElement('a');
  const offerButtonFacebook = document.createElement('a');

  const contactsInfo = document.createElement('div');
  const contactsInfoTitle = document.createElement('h3');
  const contactsInfoPinAlt = document.createElement('a');
  const contactsInfoPhone = document.createElement('a');
  const contactsInfoClock = document.createElement('a');
  const pinAltSpan = document.createElement('span');
  const phoneSpan = document.createElement('span');
  const clockSpan = document.createElement('span');

  footer.className = 'footer';
  footer.id = 'contact-us';
  footerWrapper.className = 'wrapper footer__wrapper';

  footerOffer.className = 'footer__offer';
  offerTitle.className = 'offer__title';
  offerSocials.className = 'offer__socials';
  offerTitleAccent.className = 'title_light';
  offerTitleAccent.textContent = 'Sip, Savor, Smile.';
  offerTitleSpan.className = 'title_accent';
  offerTitleSpan.textContent = ' It’s coffee time!';

  offerButtonTwitter.className = 'button__socials button__twitter';
  offerButtonTwitter.href = 'https://twitter.com/?lang=ru';
  offerButtonInstagram.className = 'button__socials button__instagram';
  offerButtonInstagram.href = 'https://www.instagram.com/';
  offerButtonFacebook.className = 'button__socials button__facebook';
  offerButtonFacebook.href = 'https://twitter.com/?lang=ru';

  contactsInfo.className = 'footer__contact-info';
  contactsInfoTitle.className = 'contacts-info__title';
  contactsInfoTitle.textContent = 'Contact us';
  contactsInfoPinAlt.className = 'contact-info';
  pinAltSpan.textContent = '8558 Green Rd., LA';
  contactsInfoPhone.className = 'contact-info';
  phoneSpan.textContent = '+1 (603) 555-0123)';
  contactsInfoClock.className = 'contact-info_last';
  clockSpan.textContent = 'Mon-Sat: 9:00 AM – 23:00 PM';

  insertSvg(twitter, offerButtonTwitter);
  insertSvg(instagram, offerButtonInstagram);
  insertSvg(facebook, offerButtonFacebook);

  insertSvg(pinAlt, contactsInfoPinAlt);
  insertSvg(phone, contactsInfoPhone);
  insertSvg(clock, contactsInfoClock);

  offerTitle.append(offerTitleAccent, offerTitleSpan);
  offerSocials.append(offerButtonTwitter, offerButtonInstagram, offerButtonFacebook);
  footerOffer.append(offerTitle, offerSocials);
  contactsInfoPinAlt.append(pinAltSpan);
  contactsInfoPhone.append(phoneSpan);
  contactsInfoClock.append(clockSpan);
  contactsInfo.append(
    contactsInfoTitle,
    contactsInfoPinAlt,
    contactsInfoPhone,
    contactsInfoClock,
  );
  footerWrapper.append(footerOffer, contactsInfo);
  footer.append(footerWrapper);
  return footer;
};
