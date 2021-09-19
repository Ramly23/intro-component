// Variables
const form = document.querySelector('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const firstError = document.querySelector('.first-error');
const secondError = document.querySelector('.second-error');
const thirdError = document.querySelector('.third-error');
const fourthError = document.querySelector('.fourth-error');
const firstH4 = document.querySelector('.first-h4');
const secondH4 = document.querySelector('.second-h4');
const thirdH4 = document.querySelector('.third-h4');
const fourthH4 = document.querySelector('.fourth-h4');
const empty = document.querySelector('.empty');

// Event Listener 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue= lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Firstname
    if(firstNameValue === "") {
        firstError.classList.add('show');
        firstH4.classList.add('show');
        firstName.style.border = "2px solid hsl(0, 100%, 74%)";
    }
    else {
        firstError.classList.remove('show');
        firstH4.classList.remove('show');
        firstName.style.border = "2px solid hsl(246, 25%, 77%)";
    }

    // Lastname 
    if(lastNameValue === "") {
        secondError.classList.add('show');
        secondH4.classList.add('show');
        lastName.style.border = "2px solid hsl(0, 100%, 74%)";
    }
    else {
        secondError.classList.remove('show');
        secondH4.classList.remove('show');
        lastName.style.border = "2px solid hsl(246, 25%, 77%)";
    }

    // Email address
    if(emailValue === "") {
        thirdError.classList.add('show');
        empty.classList.add('show');
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        thirdH4.classList.remove('show');
    }
    else if (!validateEmail(emailValue)) {
        thirdError.classList.add('show');
        thirdH4.classList.add('show');
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        empty.classList.remove('show');
    }
    else {
        thirdError.classList.remove('show');
        thirdH4.classList.remove('show');
        empty.classList.remove('show');
        email.style.border = "2px solid hsl(246, 25%, 77%)";
    }

    // Password 
    if(passwordValue === "") {
        fourthError.classList.add('show');
        fourthH4.classList.add('show');
        password.style.border = "2px solid hsl(0, 100%, 74%)";
    }
    else {
        fourthError.classList.remove('show');
        fourthH4.classList.remove('show');
        password.style.border = "2px solid hsl(246, 25%, 77%)";
    }
}

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}