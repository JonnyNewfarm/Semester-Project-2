



const form = document.getElementById("formid");
   
form.addEventListener('submit', e => {
    if(!form.checkValidity()){
        e.preventDefault()
    }

    form.classList.add('was-validated')

});























