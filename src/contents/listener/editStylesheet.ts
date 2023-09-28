import { addCSS, removeCSS } from '~contents/css-editor';

function editStylesheet(active, css): void {
  if (active) {
    addCSS(css);
  } else {
    removeCSS(css);
  }
}

export default editStylesheet;
