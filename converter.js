// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
      // add event listener to radio button
// Create a button that, when clicked, displays the converted temperature.
      // function to convert the user input
// Create another button that, when clicked, clears any text in the input field.
      // event listner with function to clear all input fields
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.

// var FahrenheitConvert = document.getElementById('convert-to-F');
// var CelsiusConvert = document.getElementById('convert-to-C');
var inputNum = document.getElementById('input-num');

function determineConverter (clickEvent) {
    if (document.getElementById('convert-to-C').checked = true) {
        function toCelsius () {
                  var celsiusTemp = (inputNum - 32) * .5556;
                  var output = document.getElementById('new-temp');
                  console.log(celsiusTemp);
                  // output.innerHTML = `<p>${celsiusTemp}</p>`;
        }

} else if (document.getElementById('convert-to-F').checked = true) {

    function toFahrenheit () {
        var inputNum = document.getElementById('input-num');
        var FahrenheitTemp = (inputNum * 1.8) + 32;
        var output = getElementById('new-temp');
        console.log(FahrenheitTemp);
        // output.innerHTML = `<p>${FahrenheitTemp}</p>`;
      }
  }
};

var button = document.getElementById("converter");
button.addEventListener("click", determineConverter);

// var clearButton = document.getElementById('clearButton');
// clearButton.addEventListener("click", function(){
//     inputNum = "";
// })


// This function should determine which conversion should
// happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//   console.log("event", clickEvent);
// }
//
// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);


// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.
