const newListingUrl = "https://api.noroff.dev/api/v1/auction/listings";
const newListingForm = document.getElementById("new-listing-form");
const title = document.getElementById("new-title");
const date = document.getElementById("new-date");
date.min = new Date().toISOString().slice(0, -14);
const media = document.getElementById("new-media");
const media2 = document.getElementById("new-media2")
const media3 = document.getElementById("new-media3")
const description = document.getElementById("new-description");
const errorMessage = document.getElementById("error-message");
errorMessage.style.display = "none";





newListingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const endsAt = new Date(`${date.value}`);
    const listingsObject = {
        title: `${title.value}`,
        description: `${description.value}`,
        endsAt: `${endsAt}`,
        media:[`${media.value}`,`${media2.value}`, `${media3.value}`,] 
    };
    console.log(endsAt)
async function postNewlistings(){
    try{
        const token = localStorage.getItem('accessToken');
      const postData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${token}`,
        },
        body: JSON.stringify(listingsObject),
        

} 
    
const response = await fetch(newListingUrl, postData);
const json = await response.json();
console.log(json);
if (response.status !== 201) {
    errorMessage.style.display = "block";

} else{
    
    location.href = "./profile.html";
}


    
    
    }catch(error){
        console.log(error)
    }




}





postNewlistings()

});

