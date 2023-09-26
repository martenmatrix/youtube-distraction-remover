// creates and inserts sheets into document
const sheet = new CSSStyleSheet();
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

function addCSS(css: string) {
  sheet.insertRule(css);
}

function getCssTextArray(sheet: CSSStyleSheet): string[] {
  return [...sheet.cssRules].map((rule) => rule.cssText);
}

function removeCSS(css: string) {
  const cssRules = getCssTextArray(sheet);
  const indexOfRule = cssRules.indexOf(css);
  if (indexOfRule === -1) {
    throw new Error('CSS Rule does not exist');
  }
  sheet.deleteRule(indexOfRule);
}

export { addCSS, removeCSS };
