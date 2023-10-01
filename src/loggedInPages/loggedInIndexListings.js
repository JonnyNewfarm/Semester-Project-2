const url = "https://api.noroff.dev/api/v1/auction/listings";
const search = document.querySelector("#search-id");



const resultsContainer = document.getElementById("listingsdiv");

async function makeApiCall() {



    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    






    

    results.forEach(function (result) {
        resultsContainer.innerHTML += `<div class="col-p3"><div class="card h-100 border-0 p-6" style="width: 20rem;" id="cardListings">
        <img src="${result.media}" class="card-img-top" alt="Image-listing" style="height: 15rem; object-fit: cover">
        <div class="card-body">
          <h3 class="card-title">${result.title}</h3>
          <p class="card-text"><small class="text-muted">${result.description}</small></p>
           <hr>
          
          <br>
          <p class="card-text" id="p-indexCard">Amount of bids: ${result._count.bids}</p>
          <p class="card-text" id="p-indexCard">Ends at: ${result.endsAt}</p>
          <a href="loggedInDetails.html?id=${result.id}" class="btn btn-primary btn-lg">Add bid</a>
        </div>
      </div>
      </div>
         `;
});

}

makeApiCall();









