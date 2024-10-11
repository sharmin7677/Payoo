//1. add event listener 
//2. get the money user wants to add also, gett the piin number provided
// 3. verify the pin number 
// 4. get the current balance
// 5. add money to be added with the current balance
// 6. display / update the balance in the DOM/UI

document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();


     const addMoney = document.getElementById('input-add-money').value;
     const addMoneyNumber = parseFloat(addMoney);
     const pinNumber = document.getElementById('input-pin-number').value;   
    


     if(pinNumber === '1234'){

        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('account-balance').innerText = newBalance
        console.log(newBalance);


     }

     else{
        alert('Failed to add money!')
     }



    })