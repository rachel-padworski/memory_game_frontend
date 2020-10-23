// Form for username
const usernameForm = document.querySelector("#create-username-form")
usernameForm.addEventListener("submit", (e) => usernameFormHandler(e))

// GET request for player
function getPlayer() {
    fetch("http://localhost:3000/api/v1/games") --->should this be the ..player/player_id?
    .then(response => response.json())
    .then(players => {
        players.data.forEach(player => {
            console.log(player) //needs more
        });
    })
}

// POST request

// where I will be handling all my values for username inputs
function usernameFormHandler(e) {
    
    e.preventDefault()
    const usernameInput = e.target.querySelector("#input-username").value
    usernameFetch(usernameInput)
}

function usernameFetch(username) {
    // const data = {player: {username}}
    fetch("http://localhost:3000/api/v1/players", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: username
        })
    })
    .then(response => response.json())
    .then(player => {
        // renderPlayerProfile(player) //figure this out
        console.log(player)
    })
 }

function renderPlayerProfile() {
    console.log("player profile") //need to figure this out
}