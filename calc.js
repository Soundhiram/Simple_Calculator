function addNumber(number) {
    const display = document.getElementById("display");
    display.value = display.value + number;
  }
  
  function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
  }
  
  function equal() {
    const display = document.getElementById("display");
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
  }