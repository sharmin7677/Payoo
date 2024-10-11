// Step-1: set event handler & prevent default behavior 

document.getElementById('button-login').addEventListener('click', function(event){
event.preventDefault();

// Step-2: get the phone number

const phoneNumber = document.getElementById('phone-number').value;

console.log(phoneNumber);

// get the pin number

const pinNumber = document.getElementById('pin-number').value;

console.log(pinNumber);

// Step-4: validate phone and pin number

// this is temporary
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in')
        window.location.href = '/home.html';
    }

    // Step-5: allow user to use the website

    else{
        alert('Wrong password or Pin');
    }




})


