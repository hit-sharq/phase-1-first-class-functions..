function receivesAFunction(callback) {
    return callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      // Function body can be empty
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // Function body can be empty
    };
  }
  