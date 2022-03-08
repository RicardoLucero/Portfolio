// THESE FUNCTIONS OPEN AND CLOSE THE CONTACT FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// THIS FUNCTION DISPLAYS THE FIRST IMAGE IN THE SLIDESHOW WHEN THE PAGE LOADS
var slideIndex = 1;
showSlides(slideIndex);

// THIS FUNCTION CHANGES THE SLIDE WHEN THE LEFT OR RIGHT ARROWS ARE CLICKED
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// THIS FUNCTION CHANGES THE SLIDE WHEN THE DOTS ARE CLICKED
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // THIS TAKES ALL ELEMENTS WITH THE CLASS NAME "mySlides" AND STORES THEM IN THE VARIABLE ARRAY "slides"
    var dots = document.getElementsByClassName("dot"); // THIS TAKES ALL ELEMENTS WITH THE CLASS NAME "dot" AND STORES THEM IN THE VARIABLE ARRAY "dots"
    if (n > slides.length) {slideIndex = 1}; // IF n (THE NUMBER PASSED INTO THE FUNCTION) IS GREATER THAN THE LENGTH OF THE ARRAY "slides", THE slideIndex IS SET TO 1
    if (n < 1) {slideIndex = slides.length}; // IF n (THE NUMBER PASSED INTO THE FUNCTION) IS LESS THAN 1, THE slideIndex  IS SET TO THE LENGTH OF THE ARRAY "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";// THIS FOR LOOP TAKES EACH ITEM IN THE ARRAY "slides"  AND SETS THE DISPLAY TO NONE
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");// THIS FOR LOOP TAKES EACH ITEM IN THE ARRAY "dots" AND REMOVES "active" WHICH REMOVES THE ACTIVE STYLING
    }
    slides[slideIndex - 1].style.display = "block"; // THIS DISPLAYS THE IMAGE IN THE SLIDESHOW
    dots[slideIndex - 1].className += " active"; // THIS ADDS THE ACTIVE STYLING TO THE DOT ASSOCIATED WITH THE IMAGE
}

// THIS CODE WILL CREATE CLOSE THE CONTACT FORM WHEN THE USER CLICKS OFF OF IT
// THE FIRST STEP IS TO ADD AN EVENT LISTENER FOR ANY CLICKS ON THE WEBSITE
document.addEventListener("click", function(event){
    // HERE WESTATE THAT IF THE CLICK HAPPENS ON THE CANCEL BUTTON OR ANYWHERE THAT IS NOT THE CONTACT FORM AND THE CLICK DOES NOT HAPPEN ON ANY ELEMENT WITH THE CONTACT CLASS THEN CALL THE closeForm() function
    if (event.target.matches(".concel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )