function cars(obj, string) {
    return console.log(string in obj);
}

let string = 'Марка';
const obj = {
  Марка: "Ford",
  Модель: "Mustang",
  Год: 1969
};

cars(obj, string)