const email = localStorage.getItem('email');
const avatar = localStorage.getItem("avatar");
const userName = localStorage.getItem("name");
const credits = localStorage.getItem("credits");
console.log(avatar)
function profileAvatar() {
  
  
  
  
  
  
     if(avatar === "null") {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.setAttribute('src', "/img/red-white-cat-i-white-studio.gif")
        image.setAttribute('id', "avatar-id")
        div.appendChild(image);
        document.getElementById('block').appendChild(div);
    } else{
      
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.setAttribute('src', avatar);
        image.setAttribute('id', "avatar-id");
        div.appendChild(image);
        document.getElementById('block').appendChild(div);
   }
};

profileAvatar();


function profileObjects() {
    document.querySelector("#profile-avatar-div").innerHTML = ` <div>
      <p class="text-primary" id="user-name"><b>Name: </b>${userName}</p>
     
    <p class=" text-primary" id="user-email"><b>Email: </b>${email}</p>  
    <p class=" text-primary" id="user-credits"><b>Credits: </b>${credits}</p> 
      
      </div>
      
  `;
  }
  profileObjects();




  
  