
let str = prompt('Введите номер кредитной карты.')

alert(str = str.replace(/\d(?=\d{4})/g, "*"));
