//1den 100e qeder ededler icerisinde 5e ve 3e bolunenlerin toplamin tapan algoritm

//let sum=0
//for (let i = 1; i <= 100; i++) {
//if (i%5==0 || i%3==0) {
// sum+=i
//}
//}
//console.log(sum);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Verilen ededin 2nin quvveti olub olmadigini bildiren algoritm

// let number = 1
// if (number <0) {
//  console.log("2-nin quvvəti deyil.");
// } 
// else {
//   while (number > 1 && number % 2 === 0) {
//    number /= 2;
//   }
//  if (number === 1) {
//    console.log(" 2-nin quvvətidir.");
// } 
// else {
//    console.log(" 2-nin quvvəti deyil.");
// }
// }


//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Verilen ededin sade ve murekkeb oldugunu bildiren algoritm
// let a=4
// let sade=true
// if (a===1 && a===2) {
//  sade=false;
//  console.log('ne sade,ne de murekkeb ededdir');
// }
// else if (a>2){
//   for (let i = 2; i < a; i++){
//  if (a%i==0) {
//   sade=false;
//   break;
//  }
// }
// if (sade) {
//   console.log('bu sadedir');
// }
// else{
//   console.log('bu murekkebdir');
// }

// }
// else{
//   console.log('ne sade ne murekkebdir');
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Gelen aylara gore hansi fesil oldugunu bildiren algoritm.Deger Consoledan girilecek.Sabit deger olmayacaq.

//const ay=prompt('ayi daxil edin')
//switch (ay) {
//case 'sentyabr':
// case 'oktyabr':
//   case 'noyabr':
//console.log('payiz fesli');
// break;

//case 'dekabr':
//case 'yanvar':
//  case 'fevral':
//console.log('qis fesli');
// break;

//case 'mart':
//  case 'aprel':
// case 'may':
//console.log('yaz fesli');
//  break;

// case 'iyun':
//  case 'iyul':
//    case 'avqust':
//console.log('yay fesli');
//     break;
// default:
//   console.log('error 404 not found');
//}


//------------------------------------------------------------------------------------------------------------------------------------------------------

// let word="zdraste kakdela?vso xa                               raso?"
// let newString=" "
// for (let i = 0; i < word.length; i++) {
//   if (word[i]!==" ") {
// newString +=word[i]
//   }


// }
//console.log(newString);



//1

// let a=10
// let b=4
// let c=5
// let teref=(a,b,c)
// if (a+b!==c && a+c!==b && b+c!==a) {
//   console.log('ucbucagin terefidir');
// }

// else{
//   console.log("yanlisdir");
// }
// console.log(teref);





//2

// let a=5
// let b=5
// let c=5
// if (a==b && b==c && c==a) {
//   console.log('ucbucaq berabertereflidir');
// }
// else{
//   console.log('ucbucaq beraberterefli deyil');
// }



//3

// let a=5
//  let b=8
//  let c=10

//  if (a==b || b==c || c==a) {
//      console.log('ucbucaq beraberyanlidir');
//    }
//    else{
//      console.log('ucbucaq beraberyanli deyil');
//    }

//4

// let a=8
//  let b=6
//  let c=10

//  if ((a**2 + b**2)===c**2){
//      console.log('ucbucaq duzbucaqlidir');
//    }
//    else{
//      console.log('ucbucaq duzbucaqli deyil');
//    }

//5

// let num=3

// for (let i = 0; i < 1000; i++) {


// if (i%10==num) {

//   console.log(i);
// }

// }

//6








//7

//  let i
//  for (let i = 10; i < 100; i++) {
//  if (i%11==0) {
//   console.log(i);
//  }

//  }






//8
// let i
// for (let i = 10; i < 100; i++) {
// if (i%11!==0) {
//   console.log(i);
// }

// }

//9


// for (let x = 1;x <=10 ;x++) {

//   for (let y = 1; y <=10; y++) {
//    console.log(x*y);

//   }
// }


// 10
// let cvb=1
// let n=8
// for (let i = 1;i <= n ;i++) {

// cvb*=i
// }
// console.log(cvb);


//12
// let a='12345678'
// for (let i =0; i < a.length ;i++) {
//  console.log(a[i]);

// }
//13
//  let a='12345678'
//  let max=0
//  for (let i =0; i < a.length ;i++) {
//   if (a[i]==i) {

//   }

//  }
//14

// for (let i = 5; i >=1; i--) {
//    let c="";
// for (let a = 1; a <= i; a++) {

//     c+="*";
// }
// console.log(c);

// }

// let arr=[1,2,3,4,5,6,7]
// arr.sort((a,b)=>a-b)//azdan coxa dogru
//  arr.sort((a,b)=>b-a)//coxdan aza
// console.log(arr);




// let meyve=["5",'a2','h3','6','7','1','2']
// meyve.splice(1,2,"a1")
// console.log(meyve);


// let arr=["5",'a2','h3','6','7','1','2']
// let result=arr.filter((a)=>a>5)
// console.log(arr);

// let meyve=["5",'a2','h3']
// let result=meyve.slice(2)
// console.log(result);

// let meyve=["5",'a2','h3']
//concat 2 arrayi birlesdirir.-----------flat  




// let arr=[7,2,6,1,11,3];
// let yaddas;
// for (let i = 0; i < arr.length; i++) {

//     for (let j = i+1; j <arr.length; j++) {
//        if (arr[i]>arr[j]) {
//         yaddas=arr[j]
//         arr[j]=arr[i]
//         arr[i]=yaddas
//        }

//     }

// }
// console.log(arr);






// let arr=[7,2,6,1,11,3];
// let yaddas;
// for (let i = 0; i < arr.length; i++) {

//     for (let j = i+1; j <arr.length; j++) {
//        if (arr[i]<arr[j]) {
//         yaddas=arr[j]
//         arr[j]=arr[i]
//         arr[i]=yaddas
//        }

//     }

// }
// console.log(arr);
//task1
// let arr=[1,2,3,4,5,6,7,8]
// arr.forEach((element) => {
//     if (element%2==0) {
//         console.log(element);
//     }
// }
// )
//task3
// const arr=[2,4,1,3,5,1,7,9]
// let result=arr.slice(0,4)
// console.log(result);

//task4
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const newArr =arr1.concat(arr2);
// console.log(newArr);
//task5
// const arr=[1,3,5,2,4,1,4,56,23,2,1,3]
// const result=arr.filter((a)=>a===1)
// console.log(result);
//task6
// const arr=[1,3,5,2,4,1,4,56,23,2,1,3]
// const result=arr.filter((a)=>a!==1)
// console.log(result);
//task7
// const arr=['salam',1,3]
// arr.unshift('Akif')
// console.log(arr);
//task8
// const arr=['salam',1,3]
//  arr.push('Akif')
//  console.log(arr);
//task9
// const arr=['salam',1,3]
// arr.splice(0,1)
// console.log(arr);
//task10
// const arr=['salam',1,3]
//  arr.splice(2,3)
// console.log(arr);
//task11
//  const arr=['salam',1,3]
//   arr.splice(1,1)
// console.log(arr);
//task12
// const arr1 =[1,2,3]
// let arr2 =[]


// arr1.forEach(element =>{
//     arr2.push(element)
//     if (arr1==arr2) {
//         console.log('copyalanib');
//     }
//     else{
//         console.log('copyalanmayib');
//     }

// }

// )
// arr1.push('a')
// console.log(arr1,arr2);


//task21
let arr
for (let arr=0;arr <Infinity; arr++) {
    if (a>2){
        for (let i = 2; i < a; i++){
       if (a%i==0) {
        sade=false;
        break;
       }
      }
      if (sade) {
        console.log(a);
      }
     }
    
}

//task22
// let num=101
// for (let num = 0; num < 1000; num++) {
//     for (let i = 0; i < 3; i++) {
//         if (num[(i-(i-1))]==num[i-1]) {
//             console.log(num);
//         }
//     }
// }
