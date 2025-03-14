const calculatorDisplay = document.querySelector('.js-calculator-display');
      let calculation = JSON.parse(localStorage.getItem('calculation')) || '';                
      if (calculation !== '') {
        calculatorDisplay.innerHTML = `${calculation}`;
      }

      function updateCalculation(inputNumber) {
        calculation += inputNumber;
        calculatorDisplay.innerHTML = `${calculation}`;
        localStorage.setItem('calculation', JSON.stringify(calculation));
      }