import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyDKL7N3s9Rf8g9OXvqElsDWbcMLXpAbqZw";

type GoogleGeocodingResponse = {
  results: Array<{
    geometry: { location: { lat: number; lng: number } };
  }>;
  status: "OK" | "ZERO_RESULTS";
};

function searchAdressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )},+Mountain+View,+CA&key=${GOOGLE_API_KEY}`
    )
    .then(response => {
      if (response.data.status !== "OK") {
        throw new Error("Couldn't fetch location!");
      }

      const coordinates = response.data.results[0].geometry.location;

      const map = new google.maps.Map(document.getElementById("map")!, {
        center: coordinates,
        zoom: 8
      });
      new google.maps.Marker({
        position: coordinates,
        map: map
      });
    })
    .catch(err => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAdressHandler);
