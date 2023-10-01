const form = document.getElementById("login-formid");
   
form.addEventListener('submit', e => {
    if(!form.checkValidity()){
        e.preventDefault()
    }

    form.classList.add('was-validated')

});
