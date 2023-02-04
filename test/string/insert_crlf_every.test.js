import t from "../../src/string/insert_crlf_every.js";
import { expect } from 'chai';

describe('string/insert_crlf_every.js', () => {
  context('#insert_crlf_every_5_len(words)', () => {
    const insert_crlf_every_5_len = t.insert_crlf_every(5);

    it(`should return 'abcde' when the value is 'abcde'`, () => {
      expect(insert_crlf_every_5_len('abcde')).to.equal('abcde');
    });

    it(`should return 'abcdef' when the value is 'abcde\\r\\nf'`, () => {
      expect(insert_crlf_every_5_len('abcdef')).to.equal('abcde\r\nf');
    });

    it(`should return '1234567890' when the value is '12345\\r\\n67890'`, () => {
      expect(insert_crlf_every_5_len('1234567890')).to.equal('12345\r\n67890');
    });
  });

  context('#insert_crlf_every_1_len(words)', () => {
    const insert_crlf_every_1_len = t.insert_crlf_every(1);

    it(`should return '' when the value is nothing`, () => {
      expect(insert_crlf_every_1_len()).to.equal('');
    });

    it(`should return '' when the value is ''`, () => {
      expect(insert_crlf_every_1_len('')).to.equal('');
    });

    it(`should return 'a' when the value is 'a'`, () => {
      expect(insert_crlf_every_1_len('a')).to.equal('a');
    });

    it(`should return 'apple' when the value is 'a\\r\\np\\r\\np\\r\\nl\\r\\ne'`, () => {
      expect(insert_crlf_every_1_len('apple')).to.equal('a\r\np\r\np\r\nl\r\ne');
    });

    it(`should return '한글' when the value is '한\\r\\n글'`, () => {
      expect(insert_crlf_every_1_len('한글')).to.equal('한\r\n글');
    });

    it(`should return '日本語' when the value is '日\\r\\n本\\r\\n語'`, () => {
      expect(insert_crlf_every_1_len('日本語')).to.equal('日\r\n本\r\n語');
    });
  });

  context('#insert_crlf_every(0)', () => {
    it(`should throw error 'Parameter must be greater than 0'`, () => {
      expect(() => {t.insert_crlf_every(0)}).to.throw('Parameter must be greater than 0');
    });
  });

  context('#insert_crlf_every(-1)', () => {
    it(`should throw error 'Parameter must be greater than 0'`, () => {
      expect(() => {t.insert_crlf_every(-1)}).to.throw('Parameter must be greater than 0');
    });
  });
});
