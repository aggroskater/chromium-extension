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

  function foobar() {

    document.body.innerHTML += [
    "<div style='",
    "  position: fixed; top: 15px; left: 15px; font-size: 24px; color: #000;",
    "  background-color: #fff; border: solid 6px #3c3; padding: 9px; z-index: 9999",
    "'>",
    "  content script loaded from require.js is working",
    "</div>"
    ].join("");

  }

  return {
    doSomething: doSomething,
    squareIt: squareIt,
    addToBody: addToBody,
    foobar: foobar
  }

});
