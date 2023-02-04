import t from "../../src/string/decimal_seperators.js";
import { expect } from 'chai';

describe('string/decimal_seperators.js', () => {
  context('#decimal_seperators(strs, ...args)', () => {
    const price = 300000000;
    const amount = 4;

    it(`should return 'Yesterday I bought 4 gucci bags.' when the value is 'Yesterday I bought \$\{amount\} gucci bags.'`, () => {
      expect(t.decimal_seperators `Yesterday I bought ${amount} gucci bags.`)
        .to.equal('Yesterday I bought 4 gucci bags.');
    });

    it(`should return 'It is a $300,000,000 bag.' when the value is 'It is a $\$\{price\} bag.'`, () => {
      expect(t.decimal_seperators `It is a $${price} bag.`)
        .to.equal('It is a $300,000,000 bag.');
    });

    it(`should return 'I spend 1,200,000,000 dollars.' when the value is 'I spend \$\{price * amount\} dollars.'`, () => {
      expect(t.decimal_seperators `I spend ${price * amount} dollars.`)
        .to.equal('I spend 1,200,000,000 dollars.');
    });
  });
});
