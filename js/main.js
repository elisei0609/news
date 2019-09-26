document.addEventListener("DOMContentLoaded", function() {
  // Addind / deleting class 'arrow--active' if clicked button was 'arrow'
  function toggleArrow() {
    document.querySelector(".aside__menu").onclick = function(e) {
      e.preventDefault();
      if (
        e.target.className.includes("arrow") ||
        e.target.className.includes("arrow--grey")
      ) {
        e.target.classList.toggle("arrow--active");
      }
    };
  }
  toggleArrow();

  function toggleDropdown() {
    const mainMenu = document.getElementById("dropdownEmail");
    const dropdownMenu = document.querySelector(".dropdown-builder");
    mainMenu.addEventListener("click", function(e) {
      dropdownMenu.style.display =
        dropdownMenu.style.display === "" ? "block" : "";
    });
  }
  toggleDropdown();

  function toggleDropdown2() {
    const menu = document.getElementById("dropdownDNS");
    const dropdownMenu = document.querySelector(".dropdown-email");
    menu.addEventListener("click", function(e) {
      dropdownMenu.style.display =
        dropdownMenu.style.display === "" ? "block" : "";
    });
  }
  toggleDropdown2();
});
