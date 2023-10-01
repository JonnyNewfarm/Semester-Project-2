const myUser = localStorage.getItem("name");
const avatarForm = document.getElementById("avatar-form");
const avatarInput = document.getElementById("avatar-input");
const avatarBtn = document.getElementById("put-avatar");
const errorMessage = document.getElementById("avatar-error");
errorMessage.innerHTML = "";

function putMediaUrl(name){
    return `https://api.noroff.dev/api/v1/auction/profiles/${name}/media`;
}
putMediaUrl(myUser);

async function changeAvatar(url, mediaObject){
try{
    const token = localStorage.getItem('accessToken');
    putData = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${token}`,
        },
        body: JSON.stringify(mediaObject),
    }
    const response = await fetch(url, putData);
    const json = await response.json();
    localStorage.setItem("avatar", json.avatar);
    location.href = "/src/profile.html";
 

}


catch(error){ 
    console.log(error);
  

}

}

avatarForm.addEventListener("submit", (event) => {
event.preventDefault();
const mediaObject = { avatar: avatarInput.value };

changeAvatar(putMediaUrl(myUser), mediaObject);

});



