const jung_buttons = document.getElementsByName("jung-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

function change_jung(jung) {
  text.innerHTML = "Here's a picture of a " + jung + "."
  photo.src = "../images/" + jung + ".jpg"
}

jung_buttons.forEach(button => {
  button.addEventListener("change", event => { 
    change_jung(button.value)
  })
})