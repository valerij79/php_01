// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// const arr = [];

// for(let i = 0; i < 3; i++) {

//     arr.push(getRandomIntInclusive(1, 7));
// }

// console.log(arr);

// arr.sort();
// console.log(arr);





// let arr3 = [...Array(1)].map(_=> Math.floor(Math.random()*7 + 1));
// console.log('First dice: ' + arr3);

// let arr4 = [...Array(1)].map(_=> Math.floor(Math.random()*6 + 1));
// console.log('Second dice: ' + arr4);

// arr3 = + arr3 ;
// arr4 = + arr4 ;

// const suma = arr3 + arr4;
// console.log('Suma: ' + suma);

// if (suma > 8) {
//     console.log('You Won!!');
// }   else {
//     console.log('Oh no... You Lost...');
// }



// console.log('Ką nupirkti Antanui?');

// let arr1 = getRandomIntInclusive(1, 6);
// console.log('First dice: ' + arr1);

// if (arr1 === 1) {
//     console.log('Pirkti televizorių');
// }   else if (arr1 === 5) {
//     console.log('Pirkti televizorių');
// }   else if (arr1 === 3){ 
//     console.log('Pirkti skalbimo mašiną');
// }   else if (arr1 === 4){ 
//     console.log('Pirkti skalbimo mašiną');
// }   else if (arr1 === 2){ 
//     console.log('Pirkti šaldytuvą');
// }   else if (arr1 === 6){ 
//     console.log('Pirkti šaldytuvą');
// }



// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let arr1 = [...Array(1)].map(_=> Math.floor(Math.random()*30));
// console.log('Number of cows: ' + arr1);

// let arr2 = [...Array(1)].map(_=> Math.floor(Math.random()*30));
// console.log('Number of kittens: ' + arr2);

// arr1 = + arr1 ;
// arr2 = + arr2 ;

// if (arr1 > 15) {
//     console.log('Does not fit');
// }  else if (arr2 > 15) {
//     console.log('Does not fit');
// } else {
//     console.log('Fits');
// }






// let arr1 = [...Array(1)].map(_=> Math.floor(Math.random()*(6 - 3 + 1) + 3));
// console.log('This is the weight of Rainius: ' + arr1);

// let arr2 = [...Array(1)].map(_=> Math.floor(Math.random()*(6 - 3 + 1) + 3));
// console.log('This is the weight of Murkis: ' + arr2);

// arr1 = + arr1 ;
// arr2 = + arr2 ;

// if (arr1 > arr2) {
//     console.log('Murkis is lighter');
// }  else if (arr1 < arr2) {
//     console.log('Rainius is lighter');
// } else {
//     console.log('Cat weights are the same');
// }




// let arr3 = [...Array(1)].map(_=> Math.floor(Math.random()*6 + 1));
// console.log('First dice: ' + arr3);

// let arr4 = [...Array(1)].map(_=> Math.floor(Math.random()*6 + 1));
// console.log('Second dice: ' + arr4);

// arr3 = + arr3 ;
// arr4 = + arr4 ;

// const suma = arr3 + arr4;
// console.log('Suma: ' + suma);

// if (suma > 8) {
//     console.log('You Won!!');
// }   else {
//     console.log('Oh no... You Lost...');
// }



// const arr = [];

// for(let i = 0; i < 10; i++) {

//     arr.push(getRandomIntInclusive(1, 11));
// }



// const arr2 = [...Array(10)].map(_=> Math.floor(Math.random()*11 + 1));

// console.log(arr2);


// Tarpinis žinių patikrinimas #2

// for (let j = 10; j >= 1; j--) {
//     console.log(j);
// }

// const arr = [];

//  for(let i = 10; i >= 1; i--) {
//     arr.push(getRandomIntInclusive(120, 220));
//  }


 // REACT BASE
 // Namu darbai

 function BebrasName({name}) {
   return (
       <h2 className="red"> {name}  </h2>
   )
}