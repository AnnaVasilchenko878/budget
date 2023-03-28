let money, time;

function start() {
  money = +prompt('Введите ваш бюджет на месяц: ', '');
  time = prompt('Введите дату в формате YYYY-MM-DD ', '');
  while(isNaN(money) || money == '' || money == null) {
      money = +prompt('Введите ваш бюджет на месяц: ', '');
  }
}

start();

let appData = {
  budjet: money,
  moneyPerDay: 0,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: true
};
// запись данных 
let a, b;

function chooseExpenses() {
  while (true) {
    a = prompt("Введите обязательную статью расходов в этом месяце:"),
      b = +prompt("Во сколько это обойдется?");
    if ((typeof (a) === 'string' && typeof (a) != null && a != '' && a.length < 50) && (typeof (b) != null && b != '')) {
      appData.expenses[a] = b;
      break;
    }
  }
}

chooseExpenses();
function chooseOptExpenses() {
  for(let i=1; i<=3; i++) {
    let answOptExpenses = prompt('Введите статью не обязательных расходов: ', '');
    if(typeof(answOptExpenses == 'string' && typeof (answOptExpenses) !== null && answOptExpenses !='' && answOptExpenses.length<50)) {
      appData.optionalExpenses[i] = answOptExpenses;
    }
  }
}

chooseOptExpenses()
//  бюджет на день
function detectDayBudget() {
  appData.moneyPerDay = (appData.budjet/30).toFixed(2); 
  alert("Ежеднвыный бюджет " + appData.moneyPerDay);
}

detectDayBudget();


// уровень достатка
function detectLevel() {
  if(appData.moneyPerDay<100) {
    console.log('Минимальный уровень достатка')
  } else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000) {
    console.log('Средний уровень достатка')
  } else if(appData.moneyPerDay>2000) {
    console.log('Высокий уровень достатка')
  } else {
    console.log('Произошла ошибка')
  }
}

detectLevel();

// накопления с депозита
function checkSavings() {
  if(appData.savings == true) {
    let save = +prompt('Введите сумму накоплений: ', ''),
        percent = +prompt('Под какой процент: ', '');
        // прибыль за месяц
    appData.monthIncome = save/100/12*percent;
    alert(`Доход в месяц составляет: ${appData.monthIncome}`);
  }
}
checkSavings();