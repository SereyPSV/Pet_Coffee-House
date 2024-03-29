// eslint-disable-next-line operator-linebreak
export const vectorLeft =
  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13.5 7H1M1 7L7 1M1 7L7 13" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/></svg>';
// eslint-disable-next-line operator-linebreak
export const vectorRight =
  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/></svg>';
// eslint-disable-next-line operator-linebreak
export const controlDark = `<svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="4" rx="2" fill="#665f55"/>
</svg>`;
// eslint-disable-next-line operator-linebreak
export const control = `<svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="4" rx="2" fill="#C1B6AD"/>
</svg>`;

export function insertSVG(svgHTML, element) {
  element.insertAdjacentHTML('afterbegin', svgHTML);
}

export function sliderControl(num, element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild); // Удаляем каждый дочерний элемент
  }
  if (num === 1) {
    insertSVG(controlDark, element);
  } else {
    insertSVG(control, element);
  }
  if (num === 0) {
    insertSVG(controlDark, element);
  } else {
    insertSVG(control, element);
  }
  if (num === 2) {
    insertSVG(controlDark, element);
  } else {
    insertSVG(control, element);
  }
}
