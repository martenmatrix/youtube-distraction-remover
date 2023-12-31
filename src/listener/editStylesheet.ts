import { addCSS, removeCSS } from '../css-editor';

function editStylesheet(active: boolean, css: string): void {
  if (active) {
    addCSS(css);
  } else {
    removeCSS(css);
  }
}

export default editStylesheet;
