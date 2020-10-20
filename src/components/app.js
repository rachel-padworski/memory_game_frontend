//instantiates a new instance of the games class
class App {
    constructor() {
        this.games = new Games()

    }

    
}

///Modal//////
const open = document.getElementById('login')
const modal_container = document.getElementById('modal-container')
const submit = document.getElementsByClassName('close')[0]

//open modal
open.addEventListener('click', () => {
    modal_container.style.display = "block";
})
//close modal
submit.addEventListener('click', () => {
    modal_container.style.display = "none";
})
//close modal when user clicks outside of it
window.addEventListener('click', () => {
    modal_container.style.display = "none";
})

