import { BrNumberPipe } from './br-number.pipe';

describe('BrNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new BrNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should separate decimal places by comma', () => {
    const pipe = new BrNumberPipe();
    expect(pipe.transform(100, 2)).toBe('100,00');
  });

  it('should truncate decimal places', () => {
    const pipe = new BrNumberPipe();
    expect(pipe.transform(0.123, 1)).toBe('0,1');
  });

  it('should replace null or undefined with dash', () => {
    const pipe = new BrNumberPipe();
    expect(pipe.transform(null, 2)).toBe('-');
    expect(pipe.transform(undefined, 2)).toBe('-');
  });

  it('should separate thousands by dots', () => {
    const pipe = new BrNumberPipe();
    expect(pipe.transform(1000, 2)).toBe('1.000,00');
    expect(pipe.transform(1000000, 2)).toBe('1.000.000,00');
  });
});
