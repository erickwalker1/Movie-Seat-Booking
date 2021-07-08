"use strict";

const seat = document.querySelector(".seat-container");
const numSeats = document.getElementById("seat-count");
const seatPrice = document.getElementById("seat-price");

const movie = document.getElementById("movie");
const option1 = document.getElementById("quietPlace");
const option2 = document.getElementById("foreverPurge");
const option3 = document.getElementById("zola");

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
  validateMovie();
});

function validateMovie() {
  if (option1.selected) {
    seatPrice.innerHTML = 13;
    seatPrice.innerHTML *= numSeats.innerHTML;
  } else if (option2.selected) {
    seatPrice.innerHTML = 11;
    seatPrice.innerHTML *= numSeats.innerHTML;
  } else if (option3.selected) {
    seatPrice.innerHTML = 10;
    let newPrice = (seatPrice.innerHTML *= numSeats.innerHTML);
    seatPrice.innerHTML = newPrice;
  } else {
    console.log("Movie Not Selected");
  }
}

/* 

* TODOs 

 --> Implement a hover state for seats

 --> Implement styling to screen container to give off a "theater screen" look

 --> Implement functionality to where if user decides to switch movies, update/reflect the price of the tickets (according to amount of seats selected) according to the movie 

*/
