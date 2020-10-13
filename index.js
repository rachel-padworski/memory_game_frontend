
document.addEventListener('DOMContentLoaded', () => {
    // console.log("DOM loaded")
    getGame();
    
    const usernameForm = document.querySelector("#create-username-form")
    usernameForm.addEventListener("submit", (e) => usernameFormHandler(e))
})

//GET request
function getGame() {
    fetch("http://localhost:3000/api/v1/games")
    .then(response => response.json())
    .then(games => {
        games.data.forEach(game => {
            console.log(game) //needs more
        });
    })
}

//POST request

//where I will be handling all my values for username inputs
function usernameFormHandler(e) {
    e.preventDefault()
    const usernameInput = e.target.querySelector("#input-username").value
    usernameFetch(usernameInput)
}

function usernameFetch(username) {
    const data = {player: {username}}
    fetch("http://localhost:3000/api/v1/players", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        renderPlayerProfile(json) //figure this out
    })
}

function renderPlayerProfile() {
    console.log("player profile") //need to figure this out
}