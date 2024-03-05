import urlAboutImg_1 from './img/about-1.jpg';
import urlAboutImg_2 from './img/about-2.jpg';
import urlAboutImg_3 from './img/about-3.jpg';
import urlAboutImg_4 from './img/about-4.jpg';
import { ABOUT_TITLE } from '../constants/constants';

export const aboutBlock = () => {
  const about = document.createElement('section');
  const wrapperAbout = document.createElement('div');
  const aboutTitle = document.createElement('div');
  const titleAbout = document.createElement('h2');
  const titleSpanFirst = document.createElement('span');
  const titleSpanAccent = document.createElement('span');
  const titleSpanSecond = document.createElement('span');

  const aboutImages = document.createElement('div');
  const aboutImg_1 = document.createElement('div');
  const aboutImg_2 = document.createElement('div');
  const aboutImg_3 = document.createElement('div');
  const aboutImg_4 = document.createElement('div');

  const img_1 = document.createElement('img');
  const img_2 = document.createElement('img');
  const img_3 = document.createElement('img');
  const img_4 = document.createElement('img');

  img_1.src = urlAboutImg_1;
  img_2.src = urlAboutImg_2;
  img_3.src = urlAboutImg_3;
  img_4.src = urlAboutImg_4;

  about.className = 'about';
  about.id = 'about';
  wrapperAbout.className = 'wrapper wrapper__about';
  aboutTitle.className = 'about__title';
  titleSpanAccent.className = 'title_accent';
  titleSpanFirst.textContent = 'Resource is';
  titleSpanAccent.textContent = ' the perfect and cozy place ';
  titleSpanSecond.textContent = ABOUT_TITLE;

  aboutImages.className = 'about__images';
  // columFirst.className = 'colum_first';
  // columSecond.className = 'colum_second';
  aboutImg_1.className = 'aboutImg_1';
  aboutImg_2.className = 'aboutImg_2';
  aboutImg_3.className = 'aboutImg_3';
  aboutImg_4.className = 'aboutImg_4';

  titleAbout.append(titleSpanFirst, titleSpanAccent, titleSpanSecond);
  aboutTitle.append(titleAbout);

  aboutImg_1.append(img_1);
  aboutImg_2.append(img_2);
  aboutImg_3.append(img_3);
  aboutImg_4.append(img_4);

  aboutImages.append(aboutImg_1, aboutImg_2, aboutImg_3, aboutImg_4);
  wrapperAbout.append(aboutTitle, aboutImages);
  about.append(wrapperAbout);
  return about;
};
