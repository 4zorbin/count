let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
    // console.log(countEl)
let count = 0

function increment(){
    count = count + 1
    console.log(count)
    countEl.textContent = count
    // document.getElementById("count-el").innerText = count
}
    // fun save to log out the count when it's called
function save() {
   console.log(count)
   //saveEl.innerText += " " + count + " + "
   saveEl.textContent += count + " + "
  count = 0
  countEl.textContent = 0
}
