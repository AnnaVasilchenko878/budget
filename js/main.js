let money = +prompt("Введите ваш бюджет на месяц: "), 
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: false
};

for(let i=0; i<2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце:"),
      b = +prompt("Во сколько это обойдется?");
      if((typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50) && (typeof(b) != null && b != '')) {
        appData.expenses[a] = b;
      } else {
        // Дз написть цикл который будет спрашивать бюджет пока данные не будут введены правильно
      }
}

alert(appData.budjet/30);