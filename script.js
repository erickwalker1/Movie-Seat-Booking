"use strict";
const seatContainer = document.querySelector(".seat-container");
const numSeats = document.getElementById("seat-count");
const seatPrice = document.getElementById("seat-price");

// Grab all of the seats that are NOT occupied
const seats = document.querySelectorAll(".row .seat:not(.seat-occupied)");

const movie = document.getElementById("movie");
const movieOne = document.getElementById("quietPlace");
const movieTwo = document.getElementById("foreverPurge");
const movieThree = document.getElementById("zola");

// Save Movie Price To Local Storage
function setMovieData(moviePrice) {
  localStorage.setItem("Movie Price", moviePrice);
}

// Grabs the seats selected by the user and sets them to an array which is then mapped through and returns the specific index of the selected seat and stores it in Local Storage
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat-selected");

  const seatIndex = [...selectedSeats].map(function (seat) {
    return [...seats].indexOf(seat);
  });

  // seatIndex is an array so set it to a string before saving to local storage
  localStorage.setItem("Selected Seat", JSON.stringify(seatIndex));

  console.log(seatIndex);
}

// Update Price Of Tickets According To Movie Selected
function checkMovie() {
  if (movieOne.selected) {
    seatPrice.innerHTML = movieOne.value;
    seatPrice.innerHTML *= numSeats.innerHTML;
  } else if (movieTwo.selected) {
    seatPrice.innerHTML = movieTwo.value;
    seatPrice.innerHTML *= numSeats.innerHTML;
  } else if (movieThree.selected) {
    seatPrice.innerHTML = movieThree.value;
    seatPrice.innerHTML *= numSeats.innerHTML;
  } else {
    console.log("Movie Not Selected");
  }
}

// Listener For Changes In Drop Down Menu And Saving That Movies' Value To localStorage
movie.addEventListener("change", function (event) {
  setMovieData(event.target.value);
  seatPrice.innerHTML = event.target.value * numSeats.innerHTML;
});

// Selects Seats
seatContainer.addEventListener("click", function (event) {
  if (
    !event.target.classList.contains("seat-occupied") &&
    !event.target.classList.contains("row") &&
    !event.target.classList.contains("seat-selected")
  ) {
    numSeats.innerHTML++;
    event.target.classList.add("seat-selected");
  } else if (event.target.classList.contains("seat-selected")) {
    event.target.classList.remove("seat-selected");
    numSeats.innerHTML--;
  }
  updateSelectedCount();
  checkMovie();
});

/* Learning Curve Moments

Grabbing elements on the page ( the 'seats' (divs)) and setting them into an array to be mapped through and returning the index of a certain seat and storing it into localStorage
  --> Spread Operator 
  --> having to 'map' through an array 
  --> Revisiting indexOf() that returns the index of a given element in the array
  --> Revisiting localStorage and how to store data in it

Listening for a 'change' event in terms of the option select dropdown and storing that specific movies' value inside local storage

*/
