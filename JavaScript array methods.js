const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo").innerHTML = size;


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits1.toString();


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2").innerHTML = fruits2.join(" * ");


const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = fruits3;
fruits3.pop();
document.getElementById("demo4").innerHTML = fruits3;


const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo5").innerHTML = fruits4;
fruits4.push("pineapple");
document.getElementById("demo6").innerHTML = fruits4;


const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo7").innerHTML = fruits5.push("pineapple");
document.getElementById("demo8").innerHTML = fruits5;


const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo9").innerHTML = fruits6;
fruits6.shift();
document.getElementById("demo10").innerHTML = fruits6;


const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo12").innerHTML = fruits7;
document.getElementById("demo11").innerHTML = fruits7.shift();


const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo13").innerHTML = fruits8;
fruits8.unshift("Lemon");
document.getElementById("demo14").innerHTML = fruits8;


const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo16").innerHTML = fruits9;
document.getElementById("demo15").innerHTML = fruits9.unshift("Lemon");


const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo17").innerHTML = fruits10;
fruits10[0] = "Kiwi";
document.getElementById("demo18").innerHTML = fruits10;


const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo19").innerHTML = fruits11;
fruits11[fruits11.length] = "Kiwi";
document.getElementById("demo20").innerHTML = fruits11;


const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo21").innerHTML = "The first fruit is: " + fruits12[0];
delete fruits12[0];
document.getElementById("demo22").innerHTML = "The first fruit is: " + fruits12[0];


const  myGirls = ["Cecile", "Lone"];
const myChildren = myGirls.concat(myBoys);
const myBoys = ["Emil", "Tobias", "Linus"];

document.getElementById("demo23").innerHTML = myChildren;


const items1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo27").innerHTML = "Original Array:<br> " + items1;
let removed = items1.splice(2, 2, "Lemon", "Kiwi");
document.getElementById("demo28").innerHTML = "New Array:<br> " + items1;
document.getElementById("demo29").innerHTML = "Removed Items:<br> " + removed;


const Items = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo30").innerHTML = Items;
Items.splice(0, 1);
document.getElementById("demo31").innerHTML = Items;


const Items1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = Items1.slice(3);
document.getElementById("demo32").innerHTML = Items1 + "<br><br>" + citrus;


const Item = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = Item.slice(1,3);
document.getElementById("demo33").innerHTML = Item + "<br><br>" + citrus1;


