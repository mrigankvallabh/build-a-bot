/* eslint-disable no-param-reassign */
function applyStyle(element) {
  element.style.position = 'absolute';
  element.style.bottom = '5px';
  element.style.right = '5px';
}

export default {
  bind: (element) => {
    applyStyle(element);
  },
  update: (element) => {
    applyStyle(element);
  },
};
