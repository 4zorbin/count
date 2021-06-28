let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")


    // console.log(countEl)
let count = 0

function increment(){
    count = count + 1
    console.log("inc" + count)
    countEl.textContent = count
    // document.getElementById("count-el").innerText = count ------ as option
}
    // fun save to log out the count when it's called
function save() {
   console.log("save" + count)
   //saveEl.innerText += " " + count + " + "  ----as option
   saveEl.textContent += count + " + "
  count = 0
  countEl.textContent = 0
}
    // clear the result in bottom field
function clearRes() {
    saveEl.textContent = "Previous: "
   console.log("clear" + saveEl)
}
