function showPhoneDetails() {
    const phone = { make: "Samsung", model: "Note 9", price: 2450, screen: "7.5" };
    console.log(phone)
    let keys = Object.keys(phone)

    let result = document.getElementById("results");
    result.innerHTML = '';
    for (const key in phone) {
        result.append(`${key}:${phone[key]}\r\n`)


    }
    result.append("\r\n\r\n")
    phone.os = "Android 9";
    for (const key in phone) {
        result.append(`${key}:${phone[key]}\r\n`)
    }


}

function showCars() {
    const car1 = {
        make: "Volvo",
        model: "s60",
        year: 2020,
        color: "black"
    }

    const car2 = {
        make: "Mercedes",
        model: "clk",
        year: 2019,
        color: "ivory"
    }

    const car3 = {
        make: "BMW",
        model: "i8",
        year: 2020,
        color: "silver"
    }

    let carList = [car1, car2, car3];

    let result = document.getElementById("results");
    result.innerHTML = '';
    for (const car of carList) {
        for (const prop in car) {
            result.append(`${prop}:${car[prop]}\r\n`)
        }

    }




}

function showClothesAvarage() {
    const clothes = [
        { type: "shirt", size: "L", price: 100, color: "white" },
        { type: "pants", size: "42", price: 150, color: "bluejeans" },
        { type: "shirt", size: "L", price: 80, color: "black" },
        { type: "skirt", size: "36", price: 70, color: "blue" },
        { type: "dress", size: "M", price: 250, color: "white" }
    ];
    console.log(clothes);
    let result = document.getElementById("results");
    result.innerHTML = '';
    for (const item of clothes) {
        for (const key in item) {
            result.append(`${key}:${item[key]}\r\n`)
        }
    }
    const avg = getAvgFromList(clothes);
    result.append(`the avarage price for these clothes is: ${avg}`);
}

function getAvgFromList(items) {
    let sum = 0;
    const counter = items.length;
    for (const item of items) {
        for (const key in item) {
            if (key === "price") {
                sum += item[key];
            }
        }

    }
    console.log(sum);
    console.log(counter);

    return sum / counter

}