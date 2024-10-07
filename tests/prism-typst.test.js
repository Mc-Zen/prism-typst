import "./prism.js"
import "../src/prism-typst.js"

describe('prism-typst.js', () => {
  test('Testing the language', () => {
    expect(19+88).toEqual(107);
    console.log(Prism.tokenize("= hello\n\\@I'm here", Prism.languages.typst))
  });
});