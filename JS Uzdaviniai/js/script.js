
console.log("Hello");






 //if 

//---------1-------
/*
let n;
n = 0;
if(n > 0){
    console.log(n + ' are positive number');
}    
else if (n == 0) {
    console.log (n + ' zero are zero:)')
}
else console.log(n + ' are negative number');
*/

//--------2------
/*
let n;
n = 2;

if(n == 1){
    console.log('GREEN you may go');
}
else if (n == 2){
    console.log('WAIT!!! its yellow light!');
}
else if (n == 3){
    console.log('RED!!! STOP');
}
else console.log('ERROR! Traffic light out of order');
*/

//--------3------
/*
let d;  //dezes     2
let k;  //knygos    8   
let n;  //talpa     5

d = 2;
k = 100;
n = 5;

if(d * n / k >= 1){
    console.log('Books fit to boxes');
}
else if (d * n / k >= 0){
    console.log('Books doesnt fit to boxes');
}        
*/

//-------4------
/*
let n;
n = 1221;

let a = Math.floor( n % 10);
let b = Math.floor (n / 10 % 10);
let c = Math.floor (n / 100 % 10);
let d = Math.floor (n / 1000 % 10);

if(a == d){
    if(b == c){
        console.log('Yes its plindrome');
    }
    else {console.log('No this is not pilindrome');
    }
}
else console.log('No this is not pilindrome');
*/

//-------5-------
/*
let n;
n = 222442;

let a = Math.floor (n % 10);
let b = Math.floor (n / 10 % 10);
let c = Math.floor (n / 100 % 10);
let d = Math.floor (n / 1000 % 10);
let e = Math.floor (n / 10000 % 10);
let f = Math.floor (n / 100000 % 10);

if(a == d){
    if((a+b+c+d+e+f) / 4 == 4){
        console.log('Lucky');
    }
    else {console.log('No luck this time');
    }
}
else console.log('No luck this time');
*/

//--------6------
/*
let year;
year = 2004;

if (0 == year % 4) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}
*/

//--------7-----

/*
let n;
n = 12423;

let a = Math.floor (n % 10);
let b = Math.floor (n / 10 % 10);
let c = Math.floor (n / 100 % 10);
let d = Math.floor (n / 1000 % 10);
let e = Math.floor (n / 10000 % 10);

if(a == e){
    if(d == b){
        console.log('Yes its plindrome');
    }
    else {console.log('No this is not pilindrome');
    }
}
else console.log('No this is not pilindrome');

*/

//----------8----------

/*
let k;
k = 8;

if(k == 1){
    console.log('Room cleaning junior');
}
else if (k == 3){
    console.log('Room cleaning junior');
}
else if (k == 5){
    console.log('Room cleaning junior');
}
else if (k == 4){
    console.log('Room cleaning older one');
}
else if (k == 6){
    console.log('Room cleaning older one');
}
else if (k > 6){
    console.log('No cheating- roll the dice again!');
} 
*/

//---------9--------
/*

let p1 = 5, p2 = 8, p3 = 9;

if(p1 == 9){
    console.log('p1 are best student of the month');
}
else if(p2 == 9){
    console.log('p2 are best student of the month');
}
else if(p3 == 9){
    console.log('p3 are best student of the month');
}
*/

//----------10-------

// let n;
// n = 2;

// if (n % 2 === 0 && n != 2) {
//     console.log(n + ' month have 30 days');
// }
// else if (n % 2 === 1) {
//     console.log(n + ' month have 31 days');
// }
// else if (n === 2){
//     console.log(n + ' month have only 28 days');
// }


//----------11-------

// let v1 = 8;
// let m1 = 29; 

// let v = 9;
// let m = 5;

// let m2 = 43;

// if( ((v1*60) + m1 + m2) > ((v*60) + m) ){
//     console.log('Pertras is gona late to school')
// }
// else {
//     console.log('Pertras arives on time to school')    
// }




//----------12-------

// let n;
// n = 13;

// if(n % 2 === 0 && n != 2 && n != 4){
//     console.log('From '+ n + ' maches yes you can bild a triange');
// }
// else console.log('No from '+ n + ' maches you can\'t bild a triange');


//----------13-------

// const s = 1896;
// let m = 2008;  //metai
// let n;

// if(m % 4 ===0) {
//     n = (m - s) / 4 + 1;
//     console.log(m +' year are '+ n +' Olimpic year');
// }
// else console.log(m +' year are not Olimpic year');


//----------14-------



//----------15-------

// let c = 50; //pinigai
// let p = 20; //kaina
// let k; //ledai
// let m; //graza

// if(k = (c / p)){
//     m = c % p;
//     console.log('Saulius can buy '+ Math.trunc(k) +' ice creams and, and left with '+ m +' cnt change');
// }


//----------16-------

// let n = 100; 
// let m = 14; 
// let k; 

// if(k = n / m){
//     console.log('To delivery '+ n +' boxes, need to be done '+ Math.ceil(k) +' trips');    
// }

//----------17-------

// let a = 10;
// let b = 5;

// if(a > b){
//     a -= 1;
//     b += 1;
//     console.log(a , b);
// }
// else if (a < b){
//     a += 1;
//     b -= 1;
//     console.log(b , a)
// }








//
//while ir for

//----------1------

// let x = 1;

// while(x < 6){
//     console.log('Labas');
//     x++;
// }


//--------2------


// let x = 0;

// while(x < 5){
//     console.log(x);
//     x++;
// }


//---------4-------


// let x = 49;

// while(x < 54){
//     console.log(x);
//     x++;
// }


//--------3------


// for(let x = 0; x < 50; x = x + 10){
//     console.log(x);
// }


// //--------5--------


// for(let x = 4; x >= 0; x = x - 1){
//     console.log(x);
// }


//------6--------


// for(let x = 0; x  < 5; x++){
//     console.log(Math.floor(Math.random() * 11));
// }


//--------7--------

// let x= 1;
// while(x != 5){
//     x = (Math.floor(Math.random() * 11));
//     console.log(x);
// }


//-----8---------


// let x = 1;
// let sum = 0;

// while(sum < 100){
//     x = (Math.floor(Math.random() * 11));
//     console.log(x);
//     sum += 1;
// }


//--------9-----

// let x= 1;
// let counter = 0;

// while(x != 5 && x != 7){
//     x = (Math.floor(Math.random() * 11));
//     console.log(x);
//     counter += 1;
// }
// console.log(counted + ' loops, till get to number ' + x)


//-------10-------

//-------11-------

//BLOGAS
// let y = 8;
// let d = 0.02;
// let m = 100;
// let profit;


// for(i = 0; i < 1; i++){
//     profit = (m * d ) * y;
//     console.log('In '+ y +' year for '+ m +' EUR of investment you profit will be '+ profit.toFixed(2) +' EUR')
// }

//--------12------

// let i = 10, v = 0, d = 0, z = 0;

// while(i != z + 36 || 3 * v != d){
//     i++
//     v = Math.floor(i % 10);
//     d = Math.floor(i / 10 % 10);
//     z = v * 10 + d;
// }
// console.log(i);

//----------13--------

// let i = 0;
// let m = Math.floor(i / 1000 % 10)

// while(i < 10000){
//     if(i > 99){
//         if(m % 2 === 0){
//             if(i % 998 != 0){
//             console.log(i)
//             }
//         }
//     }
//     i++
//     m = Math.floor(i / 1000 % 10);
// }

//-----------14----------

// let i = 0;

// while(i < 2021){
//     if(i % 4 === 0 && i % 100 != 0){
//         console.log(i);
//     }   
//     if(i % 400 === 0){
//         console.log(i);
//     }
//     i++
// }

//---------15---------

// let i = 990, n = 1000;

// while(i < n){
//     if(i % 2 === 0 && i % 10 != 0){
//     console.log(i)
//     }
//     i++
// }

//-----------16---------

// let natNum = 123456789;
// let firstNatNumb = natNum;
// console.log(firstNatNumb);

// while(firstNatNumb >= 10){
//     firstNatNumb = firstNatNumb / 10;
//     console.log(firstNatNumb)
// }
// console.log(Math.floor(firstNatNumb));

//----------17-------------

// let n = 12;
// let num = n;
// let sum = 0;

// while(num >= 1){
//     sum +=num % 10;
//     num = Math.floor(num / 10);
// }
// console.log(n, sum);

//-----------18----------

// let n = 123;
// let num = n;
// let reverse = 0;

// while(num >= 1){
//     reverse = reverse * 10 + num % 10;
//     num = Math.floor(num / 10);
// }
// console.log(n, reverse);

//---------19-----------

// let n = 123456789;
// let dig = n; 
// let number = 0;
// let max = 0;
// let min = 10;
// while(digit >= 1){
//     number = digit % 10;
//     console.log(number);
//     digit = Math.floor(digit / 10);
//     console.log(digit);
//     if(max <= number){
//         max = number;
//     }
//     if(min >- number){
//         min = number;
//     }
// }

//--------------20--------

// let i = 100;
// let p = 2;
// let sum = i;
// let year = 0;
// while(sum < 100000) {
//     sum += sum * (p / 100);
//     year ++;
// }
// console.log('??imto eur?? ind??lis taps didesnis u?? 100000'+ year +'met??');

//-------------21-----------

// let l = 1;
// let za = l;
// let zb = l;
// let n = 3;
// let d = 0;
// let m = 100;
// if(n > 0){
//     for(let i = 0; i < n; i++){
//         za = za +za;
//     }
//     console.log('Ziedu skaicius po'+ n +'dienu:'+ za);
// }
// while(zb < m /2) {
//     zb = zb +zb;
//     d++;
// }
// console.log('??iedai u??klojo pus?? e??ero'+ d +'diena'+ zb);

//-----------22-------------

// let m1 = 3;
// let m = 1;
// let n = 16;
// let sum = m1;
// let d = 1;
// while(sum <= 16){
//     m1 += m;
//     sum += m1;
//     d++;
// }
// console.log('Sodininkas dirbs '+ d +'dienas');

//---------------MASYVAI----------

//-------------1--------------

// let arr = [];

// for(let i = 0, t = 30; i < t; i++) {
//     arr.push(Math.round(Math.random() * t))
// }
// console.log(arr);


//Math.floor(Math.random*(max-min+1))+min//

// let arr = [];
// for(let i = 0; i < 30; ++i) {
//     arr[i] = Math.floor(Math.random()*(25-5+1)) + 5;
//     //arr.push(Math.floor(Math.random()*(25-5+1)) + 5);
// }
// console.log(arr)

//---------2----------------
//a)
// let numBigerThen10 = 0;
// for(i = 0; i < arr.length; ++i) {
//     if (arr[i] > 10){
//         numBigerThen10++;
//     }
// }
// console.log(numBigerThen10);

//b)
// let numMax = 0;
// let numMaxIndex = [];

// for(i = 0; i < arr.length; ++i){
//     if(arr[i] > numMax){
//         numMax = arr[i];
//     }
// }
// for(i = 0; i < arr.length; ++i){
//     if(arr[i] == numMax){
//         numMaxIndex.push(i);
//     }
// }
// console.log(numMax);
// console.log(numMaxIndex);


//c)
// let indexSum = 0;
// for(i= 0; i < arr.length; ++i){
//     if(i % 2 === 0){
//         indexSum += i;
//     }
// }
// console.log(indexSum);

//d)
// let newArr = [];
// for(i = 0; i < arr.length; ++i){
//     newArr.push(n[i] - i);             NEVEIKAI
// }
// console.log(newArr);


//e)
// for(i = 0; i < 10; ++i){
//     arr.push(Math.floor(Math.random()*(25 - 5 +1))+5);
// }
// console.log(arr);

//f)
// let odd = [];
// let even = [];
// for(i = 0; i < arr.length; ++i){
//     if (i % 2 === 0){
//         even.push(arr[i]);
//     } else {
//         odd.push(arr[i]);
//     }
// }
// console.log(odd);
// console.log(even);

//g)

//h)

// let lowestIndex = -1;

// for(i = 0; i < arr.length; ++i){
//     if(arr[i] > 10){
//         lowestIndex = i;
//         break;
//     }
// }
// console.log(lowestIndex);