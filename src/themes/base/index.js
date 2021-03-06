import baseStyles from './base.styl';
import * as platform from '../../lib/platform';


class BaseTheme {
  constructor(quill, styles = true) {
    this.quill = quill;
    this.quill.container.classList.add('ql-container');
    if (styles) {
      this.addStyles(baseStyles);
    }
  }

  addStyles(css) {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
}
BaseTheme.OPTIONS = {};


export { BaseTheme as default };
