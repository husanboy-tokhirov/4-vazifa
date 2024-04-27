//#1 + //#10
// let week = prompt("Xafta kunlarini kiriting");
// switch (week) {
//     case "1":
//         console.log("Dushanba");
//         break;
//     case "2":
//         console.log("Seshanba");
//         break;
//     case "3":
//         console.log("Chorshanba");
//         break;
//     case "4":
//         console.log("Payshanba");
//         break;
//     case "5":
//         console.log("Juma");
//         break;
//     case "6":
//         console.log("Shanba");
//         break;
//     case "7":
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("Xato");
// }

//# 2

// let week = prompt("Baho natijalarini kiriting");
// switch (week) {
//     case "1":
//         console.log("1-yomon");
//         break;
//     case "2":
//         console.log("2-qoniqarli");
//         break;
//     case "3":
//         console.log("3-qoniqarsiz");
//         break;
//     case "4":
//         console.log("4-yaxshi");
//         break;
//     case "5":
//         console.log("5-a'lo");
//         break;
//         default:
//         console.log("Xato");
// }   


// #3

// let week = prompt("Oy qaysi faslga tegishli ekanini kiriting");
// switch (week) {
//     case "1":
//     console.log("Bahor");
//     break;
//     case "2":
//     console.log("Yoz");
//     break;
//     case "3":
//     console.log("Kuz");
//     break;
//     case "4":
//     console.log("Qish");
//     break;
//     default:
//     console.log("Xato");
// }


// #4
// let week = prompt("Oy raqami kiriting va sizga qancha kundan iboratligini chiqarib beramiz");
// switch (week) {
//     case "1":
//     console.log("Yanvar-31 kun");
//     break;
//     case "2":
//     console.log("Fevral-28 kun");
//     break;
//     case "3":
//     console.log("Mart-31 kun");
//     break;
//     case "4":
//     console.log("Aprel-30 kun");
//     break;
//     case "5":
//     console.log("May-31 kun");
//     break;
//     case "6":
//     console.log("Iyun-30 kun");
//     break;
//     case "7":
//     console.log("Iyul-31 kun");
//     break;
//     case "8":
//     console.log("Avgust-31 kun");
//     break;
//     case "9":
//     console.log("Sentyabr-30 kun");
//     break;
//     case "10":
//     console.log("Oktyabr-31 kun");
//     break;
//     case "11":
//     console.log("Noyabr-30 kun");
//     break;
//     case "12":
//     console.log("Dekabr-31 kun");
//     break;
//     default:
//     console.log("Xato");
// }

// // #6    +   //#18
// let week = prompt("Bahoga qarap stipendiya kiriting va sizga pulingizni chiqarib beramiz");
// switch (week) {
//     case "1":
//     console.log("10.000 so'm");
//     break;
//     case "2":
//     console.log("15.000 so'm");
//     break;
//     case "3":
//     console.log("20.000 so'm");
//     break;
//     case "4":
//     console.log("25.000 so'm");
//     break;
//     case "5":
//     console.log("30.000 so'm");
//     break;
//     default:
//     console.log("Xato");
// }

                // 2---list

// // #1
// let number = +prompt("Son kiriting");
// if (number > 0) {
//     console.log("Musbat");
// } else if (number < 0) {
//     console.log("Manfiy");
// }

// //#2  +  // #3
// let number = +prompt("Son kiriting sizga toq yoki juftligini chiqarib beraman");
// if (number % 2 == 0) {
//     console.log("Juft");
// } else {
//     console.log("Toq");
// }

//#4
// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");

// let result = parseInt(a + b)

// console.log("butun sonlar: " + result)
 
//#5
// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");
// let c = +prompt("c son kiriting");

// if(a > b && b > c) {
//     console.log("To'g'ri");
// } else {
//     console.log("Xato");
// }

// #6
// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");
// let c = +prompt("c son kiriting");

// let result = parseInt(a + c) / b;
// console.log(result)

//#7
// let number = +prompt(" a va b sonlarini kiriting");
// if (number % 2  != 0) 
//     console.log("Toq");
// else
//     console.log("Juft");

//#8
// let number = +prompt(" a, b, c, d sonlarini kiriting");
// if (number > 0) 
//     console.log("Musbat");
// else
//     console.log("Manfiy");

//#9
// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");
// let c = +prompt("c son kiriting");

// if ((a > 0 && b > 0) || (a > 0 && c > 0) || (b > 0 && c > 0)) 
//     console.log("Musbat");  
// else
//     console.log("Manfiy");  

//#11
// let companiya = prompt("Telefon nomer kodini kiriting va u qaysi kompaniyaga tegishliligini chiqarib beraman masalan: +998 **");
// switch (companiya) {
//     case "+99890":
//         console.log("Beeline");
//         break;
//     case "+99891":
//         console.log("Beeline");
//         break;
//     case "+99893":
//     case "+99894":
//         console.log("Ucell");
//         break;
//     case "+99897":
//         console.log("MobiUz");
//         break;
//     case "+99895":
//         console.log("Uzmobile");
//         break;
//     case "+99899":
//         console.log("Uzmobile");
//         break;
//     default:
//         console.log("Xato");
// }

//#12
// let number = +prompt("Son kiriting");
// if (number > 0)
//     console.log(number + 1);
// else 
//     console.log(number - (-1));

//#13
// let number = +prompt("Son kiriting");
// if (number > 0)
//     console.log(number + 3);
// else 
//     console.log(number - (-3));


// //#14
// let number1 = +prompt("Birinchi soni kiriting");
// let number2 = +prompt("Ikkinchi soni kiriting");
// if (number1 > number2)
//     console.log("Birinchi son katta");
// else if (number1 < number2)
//     console.log("Ikkinchi son katta");
// else
//     console.log("Sonlar teng");

// // #15
// let numbera = +prompt(" A son kiriting");
// let numberb = +prompt(" B son kiriting");  
// let numberc = +prompt(" C son kiriting");
// if (numbera > numberb && numbera > numberc){
//     console.log("number a katta");
// } else if (numberb > numbera && numberb > numberc){
//     console.log("number b katta");
// } else if (numberc > numbera && numberc > numberb){
//     console.log("number c katta");
// } else {
//     console.log("Sonlar teng");
// } 

//#16

// let numbera = +prompt(" A son kiriting");
// let numberb = +prompt(" B son kiriting");  
// let numberc = +prompt(" C son kiriting");
// if (numbera < numberb && numbera < numberc){
//     console.log("number a kichkina");
// } else if (numberb < numbera && numberb < numberc){
//     console.log("number b kichkina");
// } else if (numberc < numbera && numberc < numberb){
//     console.log("number c kichkina");
// } else {
//     console.log("Sonlar teng");
// } 

//#17
// let jins = prompt("Jinsi kiriting");
// switch (jins) {
//     case "erkak":
//         console.log("Erkak");
//         break;
//     case "ayollar":
//         console.log("Ayollar");
//         break;
//     default:
//         console.log("Bu boshqa jins");
// }

//#19
// let son = prompt("Son kiriting");
// let  juft = son % 2 === 0 ? true : false;
// let  musbat = son > 0 ? true : false; 
 
// if (juft && musbat) {
//     console.log(son + " - Juft Musbat");
// } else if (juft && !musbat) {
//     console.log(son + " - Juft Manfiy");
// } else if (!juft && musbat) {
//     console.log(son + " - Toq Musbat");
// } else {
//     console.log(son + " - Toq Manfiy");
// }

//#20
// let age = new Date().getFullYear() - +prompt("Tug'ilgan yilingizni kiriting");
// console.log(age, new Date().getFullYear());

//#21
// let sonA = prompt("Son kiriting");
// let sonB = prompt("Son kiriting");
// let sonC = prompt("Son kiriting");

// if (sonA <= sonB && sonA <= sonC){
//     console.log("Jumla rost");
// }else{
//     console.log("Jumla xato");
// }

//#22
// let numberA = +prompt("A son kiriting");
// let numberB = +prompt("B son kiriting");

// if (numberA % 2 != 0 || numberB % 2 != 0)
//     console.log("Ikkita sondan 1tasi toq son");
// else
//     console.log("Ikkita sondan 1tasi toq son emas");

// //#23
// let sonA = +prompt("A son kiriting");
// let sonB = +prompt("B son kiriting");
// let sonC = +prompt("C son kiriting");

// if (sonA > 0 && sonB > 0 && sonC > 0)
//     console.log("Ularning har biri musbat son");
// else
//     console.log("Ularning har biri musbat son emas");

//#24
// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");
// let c = +prompt("c ni kiriting:");

// if ( a > 0 ||  b <= 0  || c <= 0 ){
//     document.write("Faqat bittasi musbat son");
// } else {
//     document.write("xato");
// }

//#25
// let number = prompt("Uch xonali son kiriting: ");
// if (number > 99 && number < 1000) {
//     console.log("Uch xonali son");
// } else {
//     console.log("Uch xonali son emas");
// }

//#26

//#27
// let kompyutername = prompt("Kompyuter nomini kiriting:");

// switch(kompyutername){
//     case "lenovo":  
//        console.log("Lenono noutbukimiz narxi - 5.500.000 so'm");
//     break;
//     case "asus":
//        console.log("Asuso noutbukimiz narxi - 7.500.000 so'm");
//     break;
//     case "hp":
//         console.log("Hp noutbukimiz narxi - 4.500.000 so'm");
//     break;
//     case "dell":
//         console.log("Dello noutbukimiz narxi - 6.500.000 so'm");
//     break;
//     default:
//     ("Bu kompyuter nomi topilmadi");
// }

//#28