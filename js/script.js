let navItems = document.querySelectorAll(".navigation-menu-list--link");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    removeActiveClasses();
    navItem.classList.add("active");
  });
});
function removeActiveClasses() {
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
  });
}
