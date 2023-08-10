const input = document.getElementById("input");
let expression = "";

function clearInput() {
  input.value = "";
  expression = "";
}
function deleteLastElement() {
    if (input.value.length > 0) {
      input.value = input.value.slice(0, -1);
      expression = input.value;
    }
  }
  

function appendNumber(number) {
  input.value += number;
  expression += number;
}

function performOperation(operator) {
  input.value += operator;
  expression += operator;
}

function calculate() {
  try {
    const result = eval(expression);
    input.value = result;
    expression = result.toString();
  } catch (error) {
    alert("Invalid expression");
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key.match(/[0-9.+\-*/]/)) {
    event.preventDefault();
    appendNumber(event.key);
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calculate();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    clearInput();
  }
});
