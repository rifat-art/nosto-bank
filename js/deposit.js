// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = getTextElementValueById("deposit-total");
//  console.log(previousDepositTotal, newDepositAmount);
  // calculate new deposit total
  const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
  // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value

  // console.log(newDepositTotal);
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = document.getElementById("balance-total").innerText;

  const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);

  // console.log(previousBalanceTotal, newDepositAmount);
  setTextElementValueById("balance-total", newBalanceTotal);
});
