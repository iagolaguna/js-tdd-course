/* eslint-disable */
import { expect } from 'chai';
import calc from '../src/main';

describe('Calc', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', () => {
      expect(calc).to.exist;
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)', () => {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });
    it('should reutn -4 when `sub(6,10)`', () => {
      expect(calc.sub(6, 10)).to.be.equal(-4)
    })
  });

  describe('Mult', () => {
    it('should return 4 when `mult(2,2)', () => {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });
  });
  describe('Div', () => {
    it('should return 2 when `mult(4,2)', () => {
      expect(calc.div(4, 2)).to.be.equal(2);
    });

    it('should return `não é possível divisão por zero` when divide by zero', () => {
      expect(calc.div(4, 0)).to.be.equal('não é possível divisão por zero')
    })
  });
});
