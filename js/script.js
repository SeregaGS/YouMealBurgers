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

let NavMenuLis = document.querySelectorAll(".navigation-menu-list--item");
let MenusMain = [
  {
    title: "Бургеры",
  },
  {
    title: "Закуски",
  },
];

NavMenuLis.forEach((NavMenuLi) => {
  let NavMenuLiId = NavMenuLi.id;

  NavMenuLi.addEventListener("click", () => {
    if ((id = NavMenuLi)) {
      let menutitle = document.querySelector(".menu-title");

      menutitle.innerHTML = "";
    }
  });
});
