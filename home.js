// console.log("how are you");
// alert("dont come again");
// var b = 45;
// console.log(b);
// var somenumber = 45;
// console.log(somenumber);
// var age = prompt("what are u doing here ");

// document.getElementById('sometext').innerHTML=age;

// var num = 1;
// var num2 = 3.4;
/* function 
1. creat the function .
2. call the function .
*/
// function fun(){
//     console.log('this is a function');
// }

// fun();

// function greeting(){
//     var name = prompt('what is your name?');
//     console.log("hello " + name );
// }
// greeting();

// function add(num1,num2){
//     var result = num1+num2;
//     console.log(num1 +num2);

// }
// add(10,20);

// var num =0;
// while(num<100){
//     num +=1;
//     console.log(num);
// }

// for(let num =0 ; num<100;num++){
//     console.log(num);
// }
///data types 
// let yourage = 18;
// let yourname = "shobha" ;//string
// let name = {first:'shobha',last:'kumari'};//object
// let truth = false; //boolean;
// let random;//undefined
// let nothing = null;//value null
// let fruit = ['apple','mango','grapes'];//array
//+++++++++++++++++++++++++++++++++++++++++
//strings
// let fruit ='banana';
// let morefruit = 'appale\nbanana';
// console.log(fruit.length);
// console.log(fruit.indexOf('a'));
// console.log(fruit.slice(2,6));
// console.log(fruit.replace('ban','ana'));
// console.log(fruit.toLocaleLowerCase());
// console.log(fruit.toUpperCase());
// console.log(fruit.charAt(3));
// console.log(fruit[3]);
// console.log(fruit.split(" "));

//++++++++++++++++++++++++++++++++++++++++++
//arrys
let fruit = ['banana','papaya','pineapple','coconut'];
console.log(fruit[2]);
fruit[0]='pear';
console.log(fruit);
for(let i =0; i<fruit.length;i++){
    console.log(fruit[i]);
}
//array common methods 
console.log('to string ',fruit.totring());
console.log(fruit.join('-'));
console.log(fruit, fruit.pop(), fruit);
console.log(fruit, fruit.push('balckberries'), fruit);
fruit[fruit.length]='new fruit';
console.log(fruit);
fruit.shift(); // remove frst element from the list 
console.log(fruit);
fruit.unshift('kivi');//this will add first element to the list
console.log(fruit);
let vege = ['']




