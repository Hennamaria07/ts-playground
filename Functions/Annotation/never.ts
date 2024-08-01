// 1.
function throwError(msg: string): never {
    throw new Error(msg);
  }
  
  // 2.
  function infiniteLoop(): never {
    while (true) {}
  }
  
  // 3.
  let empty: never;
  
  function neverReturns(): never {
    while (true) {}
  }
  
  empty = neverReturns(); // This line will cause a compile-time error because the function never returns