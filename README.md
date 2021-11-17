# TRVL.

Project Manager: Cassandra Torske

## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Illustrations](#illustrations)
  - [Install + Setup](#set-up)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Abstract
This was a final solo project for Turing's frontend program mod 2.
The travel app is designed to store and track the user's previous trips,
upcoming trips, and any trips that are "pending" while awaiting approval by an
agent. The app also allows the user to submit a request for a future trip
by specifying the destination, date, number of days, and number of travelers.

Learning goals included: a focus on OOP, use of an API to send and receive data,
accessible UI, and practicing the code review process with another student.

## Technologies
  - Javascript
  - HTML
  - CSS
  - Sass
  - Node
  - MicroModal
  - Atom
  - WebPack
  - Lighthouse

## Illustrations

  On page load, the user will see the app header/logo and input fields to login.
  The user will enter "traveler" followed by an integer between 1 and 50
  in the `username field`, and "travel" in the `password field`.
  If login credentials are valid, the user's TRVL. dashboard will be displayed.

  <img width="1435" alt="new_dashboard_c_week_view" src="https://user-images.githubusercontent.com/83175748/140831188-c1e65493-d252-445d-9153-5dcf13204d0d.png">

  <img width="1142" alt="navbar_info_date" src="https://user-images.githubusercontent.com/83175748/140830839-0895ed95-973f-4eab-bea6-17d26b4905d3.png">

The lefthand side of the app displays all of the user's trips, which are sorted
into tabs for `previous`, `upcoming`, and `pending`. The user can click a tab
to view the trips in that category. Each trip is displayed with a destination,
date, duration, number of travelers, and cost (which includes a 10% agent fee),
and an image that represents the destination.

  <img width="292" alt="new_sidebar_profile" src="https://user-images.githubusercontent.com/83175748/140831109-c0620726-606a-4b3b-949b-fceab808d725.png">

  At the top of the central section of the app, the user will get a message
  informing them of how much money they have spent on trips for the year 2021.
  They will also see a giant globe icon.

  When the user clicks on the `globe`, a form modal will appear on the right side.
  The user can select a trip destination from the `list of options`, then choose
  the date, number of days, and number of travelers. When all fields are filled,
  a box at the bottom will populate with an estimated price for the trip,
  including the 10% agent fee.

  If the user clicks the `Book trip!` button, the new trip will be added to
  their trips and displayed in the `pending` tab.

  If the user wants to clear the trip request form rather than submit it,
  they can click the `Cancel` button and the input fields will be reset.
  At any time, the user can click the red `X` in the top right to close the
  form completely.

  <img width="591" alt="hydration_sleep_today_charts" src="https://user-images.githubusercontent.com/83175748/140830969-cb75b770-e300-4608-9880-33c2f2f17c7b.png">

## Install + Setup
  - clone down this project repository
      * npm install to install dependencies
      * npm start to run local server
      * copy URL into browser to view page
  - Clone down [this repository](https://github.com/turingschool-examples/travel-tracker-api) to use the local server API
      * npm install to install dependencies
      * in a second terminal tab, run npm start to run local server

## Creator
  - [August Reid](https://github.com/augustreid)

## Wins
  - Created a UI focused on accessibility, which included using the MicroModal
  library to make a fully accessible form.
  - Fully built out the app with a small sample dataset so that the transition
  to API data was quite smooth.
  - Gained a much better understanding of network requests and async Javascript
  by implementing all of my API calls inside other functions and following the
  the thread to debug.

## Challenges + Improvements
  - Struggled with not having sufficient time to make the app as polished as I
  would like.
  - Scripts.js is big and messy, in need of major refactoring.
  - I would like to move API calls to a separate file. The way I did it was
  intentional to improve my understanding, but I had hoped to have time to
  refactor and DRY things up.


## Project Specs
  - [Travel Tracker Instructions and Rubric](https://frontend.turing.edu/projects/travel-tracker.html)
