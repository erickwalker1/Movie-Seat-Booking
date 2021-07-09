"use strict";
const seat = document.querySelector(".seat-container");
const numSeats = document.getElementById("seat-count");
const seatPrice = document.getElementById("seat-price");

const movie = document.getElementById("movie");
const movieOne = document.getElementById("quietPlace");
const movieTwo = document.getElementById("foreverPurge");
const movieThree = document.getElementById("zola");

// Listener For Changes In Drop Down Menu
movie.addEventListener("change", function (event) {
  seatPrice.innerHTML = event.target.value * numSeats.innerHTML;
});

// Selects Seats 
seat.addEventListener("click", function (event) {
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
  checkMovie();
});

// Update Prices According To Movie Selected
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

/* 

Task List 

 
 --> Implement functionality to where if user decides to switch movies, update/reflect the price of the tickets (according to amount of seats selected) according to the movie 

 --> Implement functionality to where selected seats are saved to localStorage 

*/
