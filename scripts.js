document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay to show the loader (e.g., fetching data)
    setTimeout(function() {
        document.getElementById("container1").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000); // Adjust the delay as needed




var type = new Typed(".typing", {
    strings: ["Coder", "Web Developer", "Problem Solver", "Quick Learner", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

let navbar = document.querySelector('.navbar');
    let menu = document.querySelector('.navbar-toggler');

    menu.onclick = () => {
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        navbar.classList.remove('active');
    }
    
  // Function to show the PDF
  function view_pdf() {
    document.getElementById('pdfContainer').classList.remove('none');
    document.getElementById('pdfContainer').classList.add('block');
    document.getElementById('view_pdf').classList.add('none');
}

// Function to hide the PDF
function view_close() {
    document.getElementById('pdfContainer').classList.add('none');
    document.getElementById('pdfContainer').classList.remove('block');
    document.getElementById('view_pdf').classList.remove('none');
}

// Attach the functions to the global scope
window.view_pdf = view_pdf;
window.view_close = view_close;
// Get the modal
var modal = document.getElementById("descriptionModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on any description button, open the modal and set the content
document.querySelectorAll('.descriptionBtn').forEach(function(button) {
  button.onclick = function () {
    var description = this.getAttribute('data-description');
    document.getElementById('modalDescription').innerText = description;
    modal.style.display = "block";
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

});