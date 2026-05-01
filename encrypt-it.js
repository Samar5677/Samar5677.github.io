/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    console.log("Window loaded!");

    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  function handleClick() {
    let textArea = document.getElementById("input-text");
    let inputText = textArea.value;

    let encryptedText = shiftCipher(inputText);

    let result = document.getElementById("result");
    result.textContent = encryptedText;
  }

  function handleReset() {
    let textArea = document.getElementById("input-text");
    textArea.value = "";

    let result = document.getElementById("result");
    result.textContent = "";
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] === 'z') {
        result += 'a';
      } else {
        let letterCode = text.charCodeAt(i);
        result += String.fromCharCode(letterCode + 1);
      }
    }

    return result;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();