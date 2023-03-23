let money = +prompt("Введите ваш бюджет на месяц: "), 
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    optionalExpenses;

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: false
};

for(let i=0; i<2; i++) {
  let a = +prompt("Ведите обязательную статью расходов в этом месяце:"),
      b = +prompt("Во сколько это обойдется?");
      appData.expenses[a] = b
}

alert(Math.round(appData.budjet/30),2);