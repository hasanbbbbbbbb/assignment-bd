/**
 * 1. const --> value not going to change 
 * 2. let --> value might chage 
 * 3. var --> should not use (unless exceptional cases) 
 */

const price = 1500;//number
//console.log(price);
const name = 'kirkir all khan'; //string
const ispoor = false; //boolean 
const friends = ['Emon', 'Mark', 'Bill', 'Jeff']
const student = { class: 9, name: 'Tomi khan', age: 17, address: 'kochu khet'}

// condition
if(price > 1000 ){
    console.log('too expensive. not for me')
}
else if(price > 500){
    console.log('May be can buy this')
}
else {
    console.log('within my budget')
}