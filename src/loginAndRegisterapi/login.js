const loginForm = document.getElementById("login-formid");
const loginUrl = 'https://api.noroff.dev/api/v1/auction/auth/login';
const loginError = document.getElementById("login-error");
loginError.style.display = "none";

async function loginUser(url, data){
    console.log(url, data);
    try{
    const postData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
    const accessToken = json.accessToken;
    const name = json.name;
    const email = json.email;
    const credits = json.credits;
    const avatar = json.avatar;
    if(response.status !== 200){
  
loginError.style.display = "block";

    } else {
        localStorage.setItem('avatar', avatar);
        localStorage.setItem('credits', credits);
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
        
        localStorage.setItem('accessToken', accessToken);
        
        location.href = "./profile.html";
    }
    

    } catch(error) {
        console.log(error);
    }

}




loginForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);
    


    loginUser(loginUrl, data);
    
});

