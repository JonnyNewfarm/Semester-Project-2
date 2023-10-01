const urlParams = new URLSearchParams(queryString);
const queryString = window.location.search;



function addBidUrl (id) {
    return `https://api.noroff.dev/api/v1/auction/listings/${listingID}/bids`
}

addBidUrl (id)

