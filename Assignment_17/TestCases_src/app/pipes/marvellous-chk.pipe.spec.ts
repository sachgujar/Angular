import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('create an instance', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe).toBeTruthy();
  });

  it('17 is Prime number', () => {
    const pipe = new MarvellousChkPipe();
    let res = pipe.transform(17, 'prime');
    expect(res).toBeTruthy();
  });

  it('28 is Perfect number', () => {
    const pipe = new MarvellousChkPipe();
    let res = pipe.transform(28, 'perfect');
    expect(res).toBeTruthy();
  });

  it('52 is Even number', () => {
    const pipe = new MarvellousChkPipe();
    let res = pipe.transform(52, 'even');
    expect(res).toBeTruthy();
  });

  it('35 is Odd number', () => {
    const pipe = new MarvellousChkPipe();
    let res = pipe.transform(35, 'odd');
    expect(res).toBeTruthy();
  });
});
