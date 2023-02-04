import t from "../../src/string/reverse.js";
import { expect } from 'chai';

describe('string/reverse.js', () => {
  context('#reverse(s)', () => {
    it(`should return ''(empty string) when the value is ''(empty string)`, () => {
      expect(t.reverse('')).to.equal('');
    });

    it(`should return 'Hello, world!' when the value is '!dlrow ,olleH'`, () => {
      expect(t.reverse('Hello, world!')).to.equal('!dlrow ,olleH');
    });

    it(`should return '안녕, 세계!' when the value is '!계세 ,녕안'`, () => {
      expect(t.reverse('안녕, 세계!')).to.equal('!계세 ,녕안');
    });

    it(`should return 'おはよう、世界！' when the value is '！界世、うよはお'`, () => {
      expect(t.reverse('おはよう、世界！')).to.equal('！界世、うよはお');
    });
  });

  context('#reverse_with_c_style(s)', () => {
    it(`should return ''(empty string) when the value is ''(empty string)`, () => {
      expect(t.reverse_with_c_style('')).to.equal('');
    });

    it(`should return 'Hello, world!' when the value is '!dlrow ,olleH'`, () => {
      expect(t.reverse_with_c_style('Hello, world!')).to.equal('!dlrow ,olleH');
    });

    it(`should return '안녕, 세계!' when the value is '!계세 ,녕안'`, () => {
      expect(t.reverse_with_c_style('안녕, 세계!')).to.equal('!계세 ,녕안');
    });

    it(`should return 'おはよう、世界！' when the value is '！界世、うよはお'`, () => {
      expect(t.reverse_with_c_style('おはよう、世界！')).to.equal('！界世、うよはお');
    });
  });

  context('#reverse_with_recursive(s)', () => {
    it(`should return ''(empty string) when the value is ''(empty string)`, () => {
      expect(t.reverse_with_recursive('')).to.equal('');
    });

    it(`should return 'Hello, world!' when the value is '!dlrow ,olleH'`, () => {
      expect(t.reverse_with_recursive('Hello, world!')).to.equal('!dlrow ,olleH');
    });

    it(`should return '안녕, 세계!' when the value is '!계세 ,녕안'`, () => {
      expect(t.reverse_with_recursive('안녕, 세계!')).to.equal('!계세 ,녕안');
    });

    it(`should return 'おはよう、世界！' when the value is '！界世、うよはお'`, () => {
      expect(t.reverse_with_recursive('おはよう、世界！')).to.equal('！界世、うよはお');
    });
  });
});
