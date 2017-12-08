document.addEventListener('DOMContentLoaded', function(){
  var gridArea = document.querySelector(".gridArea")
  var colors = document.querySelectorAll(".colorBoxes > td")
  var displayColor = document.querySelector(".current")
  var selectedColor = ""

  for (let i = 0; i < 30; i++) {
    var newRow = document.createElement("tr")
    gridArea.appendChild(newRow)

    for (let i = 0; i < 62; i++) {
      var newTd = document.createElement("td")
      newRow.appendChild(newTd)
    }
  }

  for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function(event) {
      selectedColor = event.target.className
      displayColor.style.backgroundColor = selectedColor
    })
  }

  var palettes = document.querySelectorAll(".gridArea > tr > td")

  for (let i = 0; i < palettes.length; i++) {
    palettes[i].addEventListener("click", function(event) {
      event.target.style.backgroundColor = selectedColor
    })
  }

})
