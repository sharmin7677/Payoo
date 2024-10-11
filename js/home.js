// add money to the account
// step-1: add event handler and prevent page reload after form submit
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

// Step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);


// get the pin number provided

const pinNumberInput = document.getElementById('input-pin-number').value;
console.log(pinNumberInput);

// Step-3: verify the pin number

// wrong way to validate number
if(pinNumberInput === '1234'){
    console.log('adding money')

    // Step-4: get the current balance

    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);

    // Step-5: add addMoneyInput with balance
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance);

    // update the balance in the UI/DOM
    document.getElementById('account-balance').innerText = newBalance;


}
else{
    alert('Failed to add money!');
}



})
