// Numeric variables and addition operation
var x = 5
var y = 7
var z = x + y
console.log(z)

// String variables and concatenation operation
A = "Hello "
B = "world!"
C = A + B
console.log(C)

// sumnPrint definition
function sumnPrint(x1, x2) {
    var result = x1 + x2
    console.log(result)
}

// sumnPrint call
sumnPrint(x, y);
sumnPrint(A, B);

// Conditional statement
if (C.length > z) {
    console.log(C)
    if (C.length < z) {
        console.log(z)
    }
}   else {
        console.log("good job!")
}

// Array creation
// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];

// for loop function to find the banana in arrays
// function findTheBanana(arr) {
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] === "Banana") {
//            alert("Found the banana!");
//        }
//    }
// } 

// Call function in both arrays
// findTheBanana(L1);
// findTheBanana(L2);

// forEach function to find the banana in arrays
// function findTheBanana(arr) {
//     arr.forEach(function(item) {
//         if (item === "Banana") {
//             alert("Found the banana!");
//         }
//     });
// }

// Call function in both arrays
// findTheBanana(L1);
// findTheBanana(L2);

// Greeting function to display a message based on the current hour of the day
var now = new Date();
var hour = now.getHours();

function greeting(x) { 
    if (document.getElementById("greeting")) {
        if (x < 5 || x >= 20) {
            document.getElementById("greeting").innerHTML = "Good night!";
        } else if (x < 12) {
            document.getElementById("greeting").innerHTML = "Good morning!";
        }
        else if (x < 18) {
            document.getElementById("greeting").innerHTML = "Good afternoon!";
        }
        else {
            document.getElementById("greeting").innerHTML = "Good evening!";
        }
    }
}

greeting(hour);

// Function to add the current year to the footer
function addYear() {
    document.getElementById("copyYear").innerHTML = "© " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
}

addYear();


// Sets the 'active' class on the navigation link that matches the current page URL.//

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}
ActiveNav();


 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  
  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });

  
// Function to show the purchase form when the "Buy Tickets" button is clicked
function showForm() {
    document.getElementById("purchaseForm").style.display = "block";
} 

// Function to toggle the navigation menu on smaller screens
function toggleMenu() {
    const nav = document.querySelector(".nav_bar");
    nav.classList.toggle("responsive");
}


// Initialize the map using Leaflet.js
if (document.getElementById("map")) {

  var map = L.map('map').setView([40.467459, -79.963749], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([40.467459, -79.963749]).addTo(map)
    .bindPopup("MonoMuse - Butler St")
    .openPopup();
}