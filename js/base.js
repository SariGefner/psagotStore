$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  });

   function showSection(section) {

    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(sec) {
        sec.style.display = 'none';
    });

    document.getElementById(section).style.display = 'block';
}

window.onload = function() {
    showSection('notebooks');
}
  