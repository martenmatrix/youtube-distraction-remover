import { jest } from '@jest/globals';

import { addCSS, removeCSS } from '~css-editor/changeCSS';

const mockInsertRule = jest.spyOn(CSSStyleSheet.prototype, 'insertRule');
const mockDeleteRule = jest.spyOn(CSSStyleSheet.prototype, 'deleteRule');

describe('CSS Editor', () => {
  beforeEach(() => {
    mockInsertRule.mockReset();
    mockDeleteRule.mockReset();
  });

  it('is able to add and delete rules', () => {
    addCSS('div { display: none;}');
    removeCSS('div { display: none;}');

    expect(mockInsertRule).toHaveBeenCalledWith('div { display: none;}');
    expect(mockDeleteRule).toHaveBeenCalledWith(0);
  });
});
test.todo('does throw error if css does not exist');
test.todo('can handle the addition and deletion of multiple css rules');
