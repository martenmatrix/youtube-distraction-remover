import '@testing-library/jest-dom';
import '@jest/globals';

interface ICSSStyleSheetMock {
  cssRules: string[];
  insertRule(rule: string): void;
  deleteRule(index: number): void;
}

class CSSStyleSheetMock implements ICSSStyleSheetMock {
  cssRules: string[] = [];

  insertRule(rule: string) {
    this.cssRules.push(rule);
  }

  deleteRule(index: number) {
    this.cssRules.splice(index, 1);
  }
}

// Mock document.adoptedStyleSheets with an array of CSSStyleSheetMock
Object.defineProperty(document, 'adoptedStyleSheets', {
  writable: true,
  value: [new CSSStyleSheetMock()],
});
