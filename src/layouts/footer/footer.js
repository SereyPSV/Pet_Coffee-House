import urlIconTwitter from '../../assets/img/footer/twitter.svg';
import urlIconInstagram from '../../assets/img/footer/instagram.svg';
import urlIconFacebook from '../../assets/img/footer/facebook.svg';
import urlIconPinAlt from '../../assets/img/footer/pin-alt.svg';
import urlIconPhone from '../../assets/img/footer/phone.svg';
import urlIconClock from '../../assets/img/footer/clock.svg';

export function footerBlock(body) {
  const footer = document.createElement('footer');
  const footerWrapper = document.createElement('div');

  const footerOffer = document.createElement('div');
  const offerTitle = document.createElement('h2');
  const offerSocials = document.createElement('div');
  const offerTitleAccent = document.createElement('span');
  const offerTitleSpan = document.createElement('span');
  const offerSocialsTwitter = document.createElement('button');
  const offerSocialsInstagram = document.createElement('button');
  const offerSocialsFacebook = document.createElement('button');
  const twitterIcon = document.createElement('span');
  const instagramIcon = document.createElement('span');
  const facebookIcon = document.createElement('span');

  const contactsInfo = document.createElement('div');
  const contactsInfoTitle = document.createElement('h3');
  const contactsInfoPinAlt = document.createElement('div');
  const contactsInfoPhone = document.createElement('div');
  const contactsInfoClock = document.createElement('div');
  const pinAltSpan = document.createElement('span');
  const phoneSpan = document.createElement('span');
  const clockSpan = document.createElement('span');

  footer.className = 'footer';
  footerWrapper.className = 'wrapper footer__wrapper';

  footerOffer.className = 'footer__offer';
  offerTitle.className = 'offer__title';
  offerSocials.className = 'offer__socials';
  offerTitleAccent.className = 'title_light';
  offerTitleAccent.textContent = 'Sip, Savor, Smile.';
  offerTitleSpan.className = 'title_accent';
  offerTitleSpan.textContent = ' It’s coffee time!';
  twitterIcon.style.background = `url(${urlIconTwitter}) no-repeat center`;
  instagramIcon.style.background = `url(${urlIconInstagram}) no-repeat center`;
  facebookIcon.style.background = `url(${urlIconFacebook}) no-repeat center`;

  contactsInfo.className = 'footer__contact-info';
  contactsInfoTitle.className = 'contacts-info__title';
  contactsInfoTitle.textContent = 'Contact us';
  contactsInfoPinAlt.className = 'contact-info';
  contactsInfoPhone.className = 'contact-info';
  contactsInfoClock.className = 'contact-info_last';
  pinAltSpan.style.background = `url(${urlIconPinAlt}) no-repeat center`;
  phoneSpan.style.background = `url(${urlIconPhone}) no-repeat center`;
  clockSpan.style.background = `url(${urlIconClock}) no-repeat center`;

  offerTitle.append(offerTitleAccent, offerTitleSpan);
  offerSocialsTwitter.append(twitterIcon);
  offerSocialsInstagram.append(instagramIcon);
  offerSocialsFacebook.append(facebookIcon);
  offerSocials.append(offerSocialsTwitter, offerSocialsInstagram, offerSocialsFacebook);
  footerOffer.append(offerTitle, offerSocials);
  contactsInfoPinAlt.append(pinAltSpan, '8558 Green Rd., LA');
  contactsInfoPhone.append(phoneSpan, '+1 (603) 555-0123');
  contactsInfoClock.append(clockSpan, 'Mon-Sat: 9:00 AM – 23:00 PM');
  contactsInfo.append(
    contactsInfoTitle,
    contactsInfoPinAlt,
    contactsInfoPhone,
    contactsInfoClock,
  );
  footerWrapper.append(footerOffer, contactsInfo);
  footer.append(footerWrapper);
  body.append(footer);
}
