// Function to append values to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  // Function to calculate the result of the expression
  function calculate() {
    const display = document.getElementById('display');
    try {
      // Use eval to evaluate the string as a mathematical expression
      display.value = eval(display.value);
    } catch (error) {
      // If there's an error, show 'Error' in the display
      display.value = 'Error';
    }
  }
  