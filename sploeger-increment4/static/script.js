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
} else {
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


/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav li a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();
