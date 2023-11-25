

function validateEmail() {
    const email = document.getElementById('email');
    const emailInput = email.value;
    const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = document.getElementById('errorMessage')

    if(emailRegex.test(emailInput)){
        document.getElementById('email').classList.remove('error');
        errorMessage.innerHTML = "";
        emailInput.value = "";
        window.location.href = 'success.html'
    } else {
        errorMessage.innerHTML = "Valid email required"
        document.getElementById('email').classList.add('error');
        document.getElementById('email').style.border = '2px solid hsl(4, 100%, 67%)'

    }
}

function successButton(){
    window.location.href = 'index.html'
}


