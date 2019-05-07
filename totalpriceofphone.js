/* FINAL GOAL: Calculate the total Price of phone. keep on purchasing phone until we run out of bank balance
- Have a bank balance, cost of the phone, tax, accessory price, mental spending threshold
-  Buy accessory if the total price is below your mental spending threshold
- define functions for tax calculation and formatting
- Input the bank balance */

// Define Constants

const PHONE_PRICE = 32000;
const ACCESSORY_PRICE = 2000;
const SPENDING_THRESHOLD = 35000;
const TAX = 0.1;

// functions
 function calculateFinalAmount(amt, balance){

   if((PHONE_PRICE + ACCESSORY_PRICE) <= SPENDING_THRESHOLD)
   {
     amt = amt + PHONE_PRICE + ACCESSORY_PRICE;
     console.log('Adding accessory to the bill');
   }
   else{
     amt = amt + PHONE_PRICE;
   }
   amt = amt + (amt * TAX);
   return amt;
 }

// main
let bankBalance = Number(prompt('Enter your bank balance, please'));
let noOfPhonesPurchased = 0;
let totalAmount = 0
let finalbill = 0
do{

totalAmount = calculateFinalAmount(totalAmount, bankBalance);
console.log('Total Amount: Rs'+totalAmount);
if(totalAmount > bankBalance){
	console.log('Total Amount is higher than the bank Balance we have. Sorry cant make the purchase');
  break;
}
else{
  console.log('Phone purchased');
  finalbill = totalAmount;
  console.log(finalbill);
  noOfPhonesPurchased++;
}

}while(bankBalance >= totalAmount);

console.log('Total no of phones purchased: '+noOfPhonesPurchased);
console.log('Final Bill : Rs'+finalbill);
console.log('Updated Bank Balace: Rs'+(bankBalance - finalbill) );
