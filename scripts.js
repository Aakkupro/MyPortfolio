document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay to show the loader (e.g., fetching data)
  setTimeout(function () {
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
  document.querySelectorAll('.descriptionBtn').forEach(function (button) {
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






  // pegination

  const itemsPerPage = 2; // Items to show per page
  const items = document.querySelectorAll('.item');
  let currentPage = 1;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Function to display items based on current page
  function showPage(page) {
    // Hide all items
    items.forEach(item => item.style.display = 'none');

    // Calculate which items to show
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    for (let i = start; i < end && i < items.length; i++) {
      items[i].style.display = 'block';
    }

    // Update page number display
    document.getElementById('page-num').textContent = page;
  }

  // Event listeners for pagination buttons
  document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
    else {
      currentPage = 1;
      showPage(currentPage);
    }
  });

  document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
    else{
      currentPage = totalPages;
      showPage(currentPage);
    }
  });

  // Initial display
  showPage(currentPage);


});


