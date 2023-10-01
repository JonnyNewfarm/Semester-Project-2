
const myListingsUser = localStorage.getItem("name");
const listingsDiv = document.getElementById("my-listings-div");

function listingsUrl(name) {
    return `https://api.noroff.dev/api/v1/auction/profiles/${name}/listings`;
}
listingsUrl(myListingsUser);

async function fetchMyListings(url){
    

        const fetchToken = localStorage.getItem('accessToken');
        const getData = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              authorization: `bearer ${fetchToken}`,
          }
          
        }
const response = await fetch(url, getData);
const results = await response.json();
console.log(results);

results.forEach(function (result) {
  listingsDiv.innerHTML += `<div class="col-p3"><div class="card h-100 border-0 p-6" style="width: 20rem;" id="cardListings">
  <img src="${result.media[0]}" class="card-img-top" alt="Image-listing" style="height: 15rem; object-fit: cover">
  <div class="card-body">
    <h3 class="card-title">${result.title}</h3>
    <p class="card-text"><small class="text-muted">${result.description}</small></p>
     <hr>
    
    <br>
    <p class="card-text" id="p-indexCard">Amount of bids: ${result._count.bids}</p>
    <p class="card-text" id="p-indexCard">Ends at: ${result.endsAt}</p>
    <a href="myListingsDetails.html?id=${result.id}" class="btn btn-primary btn-lg">Look at bid</a>
  </div>
</div>
</div>
   `;
});






};

fetchMyListings(listingsUrl(myListingsUser));