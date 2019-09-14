
import {TestCapCountPassAndArraySum} from './TestCapCountPassAndArraySum';
//countCapital


describe('TestCapCountPassAndArraySum', ()=>{
    it('Should return Capital letters count 2',()=>{
      let obj = new TestCapCountPassAndArraySum();
  
      let capsCount = obj.countCapital("Hello World....!");
      
      expect(capsCount).toEqual(2);
    });
    
    it('Should password contains minimum 2 capital, 3 small, 2 digits and 1 special symbol in it',()=>{
        let obj = new TestCapCountPassAndArraySum();
    
        let result = obj.checkPassword("123alohaALOHA#");

        console.log("result===>"+result);
        
        expect(result).toEqual(true);
    });

    it('Should Retrun 60',()=>{
        let obj = new TestCapCountPassAndArraySum();
    
        let arr = [10,20,30];
        let result = obj.ArrayAddition(arr);

        console.log("result===>"+result);
        
        expect(result).toEqual(60);
    });


    // it('Should decrement counter by 1 when we call decrement method',()=>{
    //   let obj = new MarvellousComponent();
  
    //   obj.Decrement();
      
    //   expect(obj.counter).toBe(-1);
    // });
  })
  