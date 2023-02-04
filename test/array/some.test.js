import t from '../../src/array/some.js';
import { expect } from 'chai';

describe('array/some.js', () => {
  context('#has_more_than_3_good(arr)', () => {
    it(`should return [1, 2, 3, 4, 5, 6] when the value is true`, () => {
      const arr = [1, 2, 3, 4, 5, 6]
      expect(t.has_more_than_3_good(arr)).to.equal(true);
    });

    it(`should return [1, 2] when the value is false`, () => {
      const arr = [1, 2]
      expect(t.has_more_than_3_good(arr)).to.equal(false);
    });

    it(`should return [] when the value is false`, () => {
      const arr = []
      expect(t.has_more_than_3_good(arr)).to.equal(false);
    });
  });

  context('#has_more_than_3_silly(arr)', () => {
    it(`should return [1, 2, 3, 4, 5, 6] when the value is true`, () => {
      const arr = [1, 2, 3, 4, 5, 6]
      expect(t.has_more_than_3_silly(arr)).to.equal(true);
    });

    it(`should return [1, 2] when the value is false`, () => {
      const arr = [1, 2]
      expect(t.has_more_than_3_silly(arr)).to.equal(false);
    });

    it(`should return [] when the value is false`, () => {
      const arr = []
      expect(t.has_more_than_3_silly(arr)).to.equal(false);
    });
  });
});
