let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
    // console.log(countEl)
let count = 0

function increment(){
    count = count + 1
    console.log(count)
    countEl.innerText = count
    // document.getElementById("count-el").innerText = count
}
    // fun save to log out the count when it's called
function save() {
   console.log(count)
   saveEl.innerText += " " + count + " + "
}
