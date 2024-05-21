const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

   

    if(emailValue === '') {
        alert('Email is required');
        return false
    } else if (!isValidEmail(emailValue)) {
        alert('Provide a valid email address');
        return false
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
         alert('Password is required');
         return false
    } else if (passwordValue.length < 8 ) {
        alert('Password must be at least 8 character.')
        return false
    } else {
        setSuccess(password);
    }

    
    if(emailValue != '' && passwordValue != ''){
        alert("Login successful");
        window.location.href="products.html"
    }

};
