function f1() {
    console.log('f1');
   }
   
   function f2() { 
       console.log('f2');
   }
   
   function f3() { 
       console.log('f3');
   }
   
   function main() {
     console.log('main');
   
     setTimeout(f1, 50);
     setTimeout(f3, 30);
   
     new Promise((resolve, reject) =>
       resolve('I am a Promise, right after f1 and f3! Really?')
     ).then(resolve => console.log(resolve));
       
     new Promise((resolve, reject) =>
       resolve('I am a Promise after Promise!')
     ).then(resolve => console.log(resolve));
   
     f2();
   }
   
   main();

   /*
    1. main
    2. f2
    3. I am a Promise, right after f1 and f3! Really?
    4. I am a Promise after Promise!
    5. f3
    6. f1
   */