import {Category} from './category';
import {Separator} from './separator';

describe('toolbox models', () => {

  it('Separator serializes to <sep>', () => {
    expect(new Separator().toXML()).toBe('<sep></sep>');
  });

  it('Category keeps name and colour', () => {
    const category = new Category('Logic', '#5b67a5');
    expect(category.name).toBe('Logic');
    expect(category.colour).toBe('#5b67a5');
    expect(category.nodes).toEqual([]);
  });

  it('Category generates a toolbox item id', () => {
    const category = new Category('Logic', '#5b67a5');
    expect(category.toolboxItemId).toBeTruthy();
  });
});
