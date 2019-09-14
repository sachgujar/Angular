import { AddMulPipe } from './add-mul.pipe';

describe('AddMulPipe', () => {
  it('create an instance', () => {
    const pipe = new AddMulPipe();
    expect(pipe).toBeTruthy();
  });

  it('Addition should 50', () => {
    const pipe = new AddMulPipe();
    expect(pipe).toBeTruthy();

    let addMulPipe = new AddMulPipe();
    expect(addMulPipe.transform(10, 40)).toEqual(50);
    
  });

});
