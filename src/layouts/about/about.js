import urlAboutImg_1 from '../../assets/img/about/about-1.jpg';
import urlAboutImg_2 from '../../assets/img/about/about-2.jpg';
import urlAboutImg_3 from '../../assets/img/about/about-3.jpg';
import urlAboutImg_4 from '../../assets/img/about/about-4.jpg';
import { ABOUT_TITLE } from '../constants/constants';

export function about(body) {
  const about = document.createElement('section');
  const wrapperAbout = document.createElement('div');
  const aboutTitle = document.createElement('div');
  const titleAbout = document.createElement('h2');
  const titleSpanFirst = document.createElement('span');
  const titleSpanAccent = document.createElement('span');
  const titleSpanSecond = document.createElement('span');

  const aboutImages = document.createElement('div');
  const columFirst = document.createElement('div');
  const columSecond = document.createElement('div');
  const aboutImg_1 = document.createElement('div');
  const aboutImg_2 = document.createElement('div');
  const aboutImg_3 = document.createElement('div');
  const aboutImg_4 = document.createElement('div');

  about.className = 'about';
  wrapperAbout.className = 'wrapper wrapper__about';
  aboutTitle.className = 'about__title';
  titleSpanAccent.className = 'title_accent';
  titleSpanFirst.textContent = 'Resource is';
  titleSpanAccent.textContent = ' the perfect and cozy place ';
  titleSpanSecond.textContent = ABOUT_TITLE;

  aboutImages.className = 'about__images';
  columFirst.className = 'colum_first';
  columSecond.className = 'colum_second';
  aboutImg_1.className = 'aboutImg_1';
  aboutImg_2.className = 'aboutImg_2';
  aboutImg_3.className = 'aboutImg_3 img';
  aboutImg_4.className = 'aboutImg_4';

  titleAbout.append(titleSpanFirst, titleSpanAccent, titleSpanSecond);
  aboutTitle.append(titleAbout);
  wrapperAbout.append(aboutTitle);

  aboutImg_1.style.background = `url(${urlAboutImg_1}) center`;
  aboutImg_2.style.background = `url(${urlAboutImg_2}) center`;
  aboutImg_3.style.background = `url(${urlAboutImg_3}) center`;
  aboutImg_4.style.background = `url(${urlAboutImg_4}) center`;

  columFirst.append(aboutImg_1, aboutImg_2);
  columSecond.append(aboutImg_3, aboutImg_4);
  aboutImages.append(columFirst, columSecond);
  wrapperAbout.append(aboutImages);
  about.append(wrapperAbout);
  body.append(about);
}
