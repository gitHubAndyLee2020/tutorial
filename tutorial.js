var column_left = document.querySelector(".column.left")
var column_middle = document.querySelector(".column.middle")

menu = () => {
  if (column_left.style.display === "none") {
    column_left.style.display = "block"
    column_middle.style.margin = "0px 0px 0px 200px"
  } else {
    column_left.style.display = "none"
    column_middle.style.margin = "0px"
  }
}
