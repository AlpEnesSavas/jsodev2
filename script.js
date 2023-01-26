let userForm = document.querySelector("#userForm")
userForm.addEventListener("submit", textSubmit)

function textSubmit(){
    event.preventDefault()
    let toInput = document.querySelector("#to")
    let doInput = document.querySelector("#do")
    console.log(toInput.value)
    console.log(doInput.value)
    console.log("first func ended")
    
    if (toInput.value !== "" && doInput.value !== "") {
        listAdder(toInput, doInput)
        localSave(toInput, doInput)
    }
    else {
        $('#toaster').toast('show')
    }
    toInput.value = ""
    doInput.value = ""
}

function listAdder(one,two){
    console.log(one.value)
    let ulDom = document.querySelector("#list")
    let liDom = document.createElement("li")
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "x"
    deleteBtn.classList.add("delete-btn")
    liDom.innerHTML = (one.value) + (two.value)
    liDom.appendChild(deleteBtn)
    ulDom.prepend(liDom)
    console.log("second func ended")
}


function localSave(onesave, secondsave){
    localStorage.setItem("to", onesave.value)
    localStorage.setItem("do", secondsave.value)
}

list.addEventListener("click", deleteItem)
function deleteItem(e){
    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove()
    }
}