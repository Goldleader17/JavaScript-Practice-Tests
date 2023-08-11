const cars = ["BMW", "Audi", "Volvo", "Saab", "Fiat", "Ford"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;