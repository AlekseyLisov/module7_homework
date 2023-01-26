function cars(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key, obj[key])
        }
    }
}

let box = {
Марка: "Ford",
Модель: "Mustang",
Год: 1969
}

cars(box);