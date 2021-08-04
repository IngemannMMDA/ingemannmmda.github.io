// JavaScript document

function changeBg(){

    const images = [
        'url("assets/logo/KNI_Farvet-logo.png")',
        'url("assets/logo/Polaroil-logo.png")',
        'url("assets/logo/Pilersuisoq_KNI-p ilagaa_blue_cmyk.png")',
        'url("assets/logo/Neqi-logo.png")',
        'url("assets/logo/Pisisa-logo.png")',
        'url("assets/logo/KNI_Engros-logo.png")',
    ]

    const section = document.querySelector('section')
    const bg = images[Math.floor(Math.random() * 
    images.length)];
    section.style.backgroundImage = bg;
}

setInterval(changeBg, 3000)

// Dropdown på "Om KNI A/S"

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }