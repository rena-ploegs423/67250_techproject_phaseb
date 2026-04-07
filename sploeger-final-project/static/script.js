
/* --- Numeric variables and addition --- */
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

/* --- String variables and concatenation --- */
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

/* --- sumnPrint: adds two values and logs the result --- */
function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

/* --- Conditional: compare string length to numeric sum --- */
if (C.length > z) {
    console.log(C);
    if (C.length < z) {
        console.log(z);
    }
} else {
    console.log("good job!");
}



var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var el = document.getElementById("greeting");
    if (el) {
        if (x < 5 || x >= 20) {
            el.innerHTML = "Good Night - Welcome to MonoMuse";
        } else if (x < 12) {
            el.innerHTML = "Good Morning - Welcome to MonoMuse";
        } else if (x < 18) {
            el.innerHTML = "Good Afternoon - Welcome to MonoMuse";
        } else {
            el.innerHTML = "Good Evening - Welcome to MonoMuse";
        }
    }
}

greeting(hour);



function addYear() {
    var el = document.getElementById("copyYear");
    if (el) {
        el.innerHTML = "© " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}

addYear();



function ActiveNav() {
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();



function toggleMenu() {
    var nav = document.querySelector(".nav_bar");
    nav.classList.toggle("responsive");
}



if (document.getElementById("map")) {

    var map = L.map("map").setView([40.467459, -79.963749], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    }).addTo(map);

    L.marker([40.467459, -79.963749]).addTo(map)
        .bindPopup("<strong>MonoMuse</strong><br>4800 Butler Street, Pittsburgh, PA")
        .openPopup();
}



$(document).ready(function () {

    $("#readLess").on("click", function () {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show().attr("aria-expanded", "false");
    });

    $("#readMore").on("click", function () {
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide().attr("aria-expanded", "true");
    });


    
    if ($("#gallery").length) {

        var currentSlide = 0;
        var slides = $(".slide");
        var total = slides.length;

        // Hide all slides except the first on page load
        slides.not(":first").hide();

        // Fade to the slide at the given index and update the counter
        function showSlide(index) {
            slides.removeClass("active-slide").fadeOut(300);
            $(slides[index]).addClass("active-slide").fadeIn(400);
            $("#slideCounter").text((index + 1) + " / " + total);
        }

        // Next button: advance one slide forward, wrapping around
        $("#nextSlide").on("click", function () {
            currentSlide = (currentSlide + 1) % total;
            showSlide(currentSlide);
        });

        // Previous button: go one slide back, wrapping around
        $("#prevSlide").on("click", function () {
            currentSlide = (currentSlide - 1 + total) % total;
            showSlide(currentSlide);
        });
    }


    
    if ($("#membershipAccordion").length) {

        $(".accordion-btn").on("click", function () {
            var content = $(this).next(".accordion-content");
            var isOpen = content.is(":visible");

            // Close all open panels first
            $(".accordion-content").slideUp(250);
            $(".accordion-btn").attr("aria-expanded", "false");

            // If the clicked panel was closed, open it
            if (!isOpen) {
                content.slideDown(250);
                $(this).attr("aria-expanded", "true");
            }
        });
    }

}); // end $(document).ready


// Price lookup table – one entry per ticket type value in the <select>
var TICKET_PRICES = {
    adult:   18,
    student: 15,
    member:  10
};

// Updates the estimated total price display whenever type or quantity changes
function updatePrice() {
    var type = document.getElementById("ticketType").value;
    var qty  = parseInt(document.getElementById("quantity").value) || 0;

    // Only calculate if both a valid type and a valid quantity are selected
    var price = TICKET_PRICES[type] || 0;
    var total = (price > 0 && qty >= 1 && qty <= 10) ? qty * price : 0;

    document.getElementById("totalPrice").textContent = "$" + total.toFixed(2);
}

// Validates all form inputs and shows the confirmation section on success
function submitOrder() {
    var valid = true;

    // Clear all previous error messages
    document.querySelectorAll(".error-msg").forEach(function (el) {
        el.style.display = "none";
    });

    // Validate: visit date is required
    var visitDate = document.getElementById("visitDate").value;
    if (!visitDate) {
        document.getElementById("visitDateError").style.display = "inline";
        valid = false;
    }

    // Validate: ticket type is required
    var ticketType = document.getElementById("ticketType").value;
    if (!ticketType) {
        document.getElementById("ticketTypeError").style.display = "inline";
        valid = false;
    }

    // Validate: quantity must be a whole number between 1 and 10
    var qtyRaw = document.getElementById("quantity").value;
    var qty = parseInt(qtyRaw);
    if (!qtyRaw || isNaN(qty) || qty < 1 || qty > 10 || qtyRaw.includes(".")) {
        document.getElementById("quantityError").style.display = "inline";
        valid = false;
    }

    // Validate: email must match a valid format
    var email = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "inline";
        valid = false;
    }

    // Validate: zip code is optional but must be exactly 5 digits if provided
    var zip = document.getElementById("zipCode").value;
    if (zip !== "" && !/^\d{5}$/.test(zip)) {
        document.getElementById("zipCodeError").style.display = "inline";
        valid = false;
    }

    // Stop and show errors if anything failed
    if (!valid) return;

    // Calculate the total using the correct per-type price
    var price = TICKET_PRICES[ticketType];
    var total = qty * price;

    // Readable labels for the confirmation table
    var typeLabels = { adult: "Adult (General)", student: "Student", member: "Member" };

    // Populate the confirmation section
    document.getElementById("confirmDate").textContent  = visitDate;
    document.getElementById("confirmType").textContent  = typeLabels[ticketType];
    document.getElementById("confirmQty").textContent   = qty;
    document.getElementById("confirmTotal").textContent = "$" + total.toFixed(2);
    document.getElementById("confirmEmail").textContent = email;

    // Hide the form and reveal the confirmation
    document.getElementById("checkoutForm").style.display       = "none";
    document.getElementById("confirmationSection").style.display = "block";

    // Scroll smoothly up to the confirmation message
    document.getElementById("confirmationSection").scrollIntoView({ behavior: "smooth" });
}

// Resets the form so the user can start a new order
function resetForm() {
    document.getElementById("ticketForm").reset();
    document.getElementById("totalPrice").textContent = "$0.00";
    document.getElementById("checkoutForm").style.display        = "block";
    document.getElementById("confirmationSection").style.display = "none";
}