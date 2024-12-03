const menuEL = document.querySelector(".sidebar")
const menuBtn = document.querySelector(".close__menu__btn")
const modalBtn = document.querySelector(".location")
const modalBody = document.querySelector(".body")

function showSidebar (){
    menuEL.classList.add("show")
    menuBtn.classList.add("menuShowBtn")

}

function removeSidebar(){
    menuEL.classList.remove("show")
    menuBtn.classList.remove("menuShowBtn")
}

function openModal(){
    modalBody.style.display = "block"
}

function closeModal(){
    modalBody.style.display = "none"
}