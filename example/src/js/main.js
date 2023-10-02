let btnStart = document.querySelector('#start'),
  budgetOutput = document.querySelector('.budget-value'),
  daybudgetOutput = document.querySelector('.daybudget-value'),
  levelValueOutput = document.querySelector('.level-value'),
  expensesOutput = document.querySelector('.expenses-value'),
  optionalExpensesOutput = document.querySelector('.optionalexpenses-value'),
  incomeOutput = document.querySelector('.income-value'),
  mothsavingsOutput = document.querySelector('.monthsavings-value'),
  yearSavingsValueOutput = document.querySelector('.yearsavings-value'),
  expensesInputs = document.querySelectorAll('.expenses-item'),
  btnExpenses = document.querySelector('.expenses-item-btn'),
  btnOptionalExpenses = document.querySelector('.optionalexpenses-btn'),
  optionalExpensesInputs = document.querySelectorAll('.optionalexpenses-item')
  btnCountBudget = document.querySelector('.count-budget-btn'),
  chooseIncomeInput = document.querySelector('.choose-income'),
  savingsInput = document.querySelector('#savings'),
  chooseSumInput = document.querySelector('#sum'),
  choosePercentInput = document.querySelector('#percent'),
  yearInput = document.querySelector('.year-value'),
  monthInput = document.querySelector('.month-value'),
  dayInput = document.querySelector('.day-value');

let money, time, sumExpenses;

btnStart.addEventListener('click', function () {
  time = prompt('Введите дату в формате YYYY-MM-DD ', ''),
    money = +prompt('Введите ваш бюджет на месяц: ', '');
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Введите ваш бюджет на месяц: ', '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetOutput.textContent = money.toFixed();
  yearInput.value = new Date(Date.parse(time)).getFullYear();
  monthInput.value = new Date(Date.parse(time)).getMonth()+1;
  dayInput.value = new Date(Date.parse(time)).getDate();
  btnExpenses.removeAttribute('disabled');
  savingsInput.removeAttribute('disabled');
  btnCountBudget.removeAttribute('disabled');
  savingsInput.removeAttribute('disabled');
  console.log(appData);

});

btnExpenses.addEventListener('click', function () {
  sumExpenses = 0;
  for (let i = 0; i < expensesInputs.length; i++) {
    let a = expensesInputs[i].value,
        b = expensesInputs[++i].value;
      if ((typeof (a) === 'string' && typeof (a) != null && a != '' && a.length < 50) && (typeof (b) != null && b != '')) {
        appData.expenses[a] = b;
        sumExpenses += +b;
      } else {
        i = i-1;
      }
  }
  expensesOutput.textContent = sumExpenses;
})



btnOptionalExpenses.addEventListener('click', function(){
  for (let i = 0; i <optionalExpensesInputs.length; i++) {
    let answOptExpenses = optionalExpensesInputs[i].value;
      appData.optionalExpenses[i] = answOptExpenses;
      optionalExpensesOutput.textContent += appData.optionalExpenses[i] + ' ';
  }
});

btnCountBudget.addEventListener('click', function(){
  if(appData.budget !=undefined) {
    appData.moneyPerDay = ((appData.budget - sumExpenses)/30).toFixed(2);
    daybudgetOutput.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 100) {
      levelValueOutput.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValueOutput.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValueOutput.textContent = 'Высокий уровень достатка';
    } else {
      levelValueOutput.textContent = 'Произошла ошибка';
    }
  } else {
    daybudgetOutput.textContent = 'Произошла ошибка'
  }
})

chooseIncomeInput.addEventListener('input', function(){
  let items = this.value;
    if (typeof (items) !== null && items !== '') {
        appData.income = items.split(', ');
        incomeOutput.textContent = appData.income;
    }
});

savingsInput.addEventListener('click', function(){
  if(appData.savings == true) {
      appData.savings = false;
  } else {
    appData.savings = true;
  }
})

chooseSumInput.addEventListener('input', function(){
  if(appData.savings == true) {
    let sum = +this.value,
    percent = +choosePercentInput.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100  * percent;

    mothsavingsOutput.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValueOutput.textContent = appData.yearIncome.toFixed(1);
  }

})
choosePercentInput.addEventListener('input', function () {
    if (appData.savings == true) {
      let sum = +chooseSumInput.value,
        percent = +choosePercentInput.value;
      appData.monthIncome = sum / 100 / 12 * percent;
      appData.yearIncome = sum / 100 * percent;
      mothsavingsOutput.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValueOutput.textContent = appData.yearIncome.toFixed(1);
    }
})

let appData = {
  budget: money,
  moneyPerDay: 0,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};