import { MulPipe } from './mul.pipe';

describe('MulPipe', () => {
  it('create an instance', () => {
    const pipe = new MulPipe();
    expect(pipe).toBeTruthy();
  });

  it('Should retrun 40', () => {
    const pipe = new MulPipe();
    let mul = pipe.transform(10,4);
    expect(mul).toEqual(40);
  });
});
