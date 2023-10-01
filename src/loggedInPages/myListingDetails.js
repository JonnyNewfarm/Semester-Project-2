const detailContainer = document.getElementById("my-details-div");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



console.log(id);


const url = `https://api.noroff.dev/api/v1/auction/listings/${id}`;

console.log(url);

async function fetchPost() {

    try {

        const fetchToken = localStorage.getItem('accessToken');
        const getData = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              authorization: `bearer ${fetchToken}`,
          },
          
        }
        const response = await fetch(url, getData);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    }
    catch (error) {
        console.log(error);

    }

}

fetchPost();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="card mb-3" style="max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-5">
        <img src="${details.media[0]}" class="img-fluid rounded-start" alt="product-image">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">${details.title}</h5>
          <p class="card-text">${details.description}</p>
          <p class="card-text"><small class="text-muted">Offer ends:</small></p>
          <p class="card-text">${details.endsAt}</p>
          <p class="card-text"><small class="text-muted">Amount of bids</small></p>
          <div>${details._count.bids}</div>
          <br>
          
         
          <div class="input-group mb-3">
          
  
</div>

        </div>
      </div>
    </div>
  </div>
                            `;
}
