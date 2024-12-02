// Ukol 3

const menuTlacitko = document.querySelector("#menu-tlacitko")
menuTlacitko.addEventListener("click", () => {
  const menuPolozky = document.querySelector("#menu-polozky")
  menuPolozky.classList.toggle("show")
  const i = document.querySelector("#menu-tlacitko i")
  if(menuPolozky.classList.contains("show")) {
    i.classList.remove("fa-bars")
    i.classList.add("fa-xmark")
  } else {
    i.classList.remove("fa-xmark")
    i.classList.add("fa-bars")
  }
})

