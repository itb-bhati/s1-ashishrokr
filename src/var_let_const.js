// var is function scoped
function testVar(condition) {
  var value = "Ashish";
  if (condition) {
    var value = "Diwan";
    console.log(value);
  }

  console.log(value);
}

// let is block scoped
function test(condition) {
  let value = "Ashish";
  if (condition) {
    value = "Diwan";
    console.log(value);
  }

  console.log(value);
}

// const cannot reassigned
function test(condition) {
  const value = "Ashish";
  if (condition) {
    value = "Diwan";
  }

  console.log(value);
}

test()
