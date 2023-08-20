function validate() {
    const email = document.getElementById('mail');
    const password = document.getElementById('userpassword');
    const form = document.querySelector('form');
    const confirmPassword = document.getElemenyById('confirmPassword');
    email.addEventListener("input", (event) => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("I am expecting an email address!");
            event.preventDefault();
        } else {
            email.setCustomValidity("");
        }
    });

    form.addEventListener('submit', (event) => {
        if (confirmPassword.value != password.value) {
            password.setCustomValidity('Passwords do not match');
            confirmPassword.setCustomValidity('Passowrds do not match');
            event.preventDefault();
        }
    })

    password.addEventListener("input", (event) => {
        if (password.pattern.typeMismatch) {
            password.setCustomValidity('Password pattern should be: A lower case letter, a capital (upper case) letter, a number, minimum 8 characters');
            event.preventDefault();
        }
    });




}

function showError() {
    if (email.validity.valueMissing) {
        email.setCustomValidity('Email field is invalid');
    }
}

validate();