define( function () {

  function doSomething () {

    alert("Lolwutermelon.");

  }

  function squareIt(x) {

    return x * x;

  }

  function addToBody(x) {

    var newPara = document.createElement("p");
    var newText = document.createTextNode(x);
    newPara.appendChild(newText);
    document.body.appendChild(newPara);

  }

  return {
    doSomething: doSomething,
    squareIt: squareIt,
    addToBody: addToBody
  }

});
