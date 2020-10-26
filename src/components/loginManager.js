// class LoginManager {
//     constructor() {
//         // this.adapter = new PlayersAdapter(),
//         this.establishListeners()
//     }
    
//     establishListeners() {
//         const loginForm = document.querySelector('#form-container')
//         loginForm.addEventListener('submit', (e) => this.loginFormHandler(e))
//     }
    
//     loginFormHandler(e) {
//         e.preventDefault()
//         const usernameInput = e.target.querySelector('#input-username').value 
//         const passwordInput = e.target.querySelector('#login-password').value
//         this.loginFetch(usernameInput, passwordInput)
//     }

//     loginFetch(username, password) {
//         const bodyData = {player: { username, password }}

//         fetch("http://localhost:3000/api/v1/login", {
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(bodyData)
//         })
//         .then(response => response.json())
//         .then(json => {
//             localStorage.setItem('jwt_token', json.jwt)
//             this.profileFetch()
//         })
//     }

//     profileFetch() {
//         fetch('http://localhost:3000/api/v1/profile', {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
//             }
//         })
//         .then(response => response.json())
//         .then(json => {
//             console.log(json)
//             //what is happening here
//             const playerGreeting = document.querySelector('#player-greeting')
//             playerGreeting.textContent = `Welcome back ${json.player.data.attributes.username}`
//             // console.log(json.player.data.attributes.username)
//             // alert(`Welcome back ${json.player.data.attributes.username}`)
//             // add a feature to count wins to show to player stats
//             this.closeModal()
//         })
//     }

//     closeModal() {
//         let modal_container = document.getElementById('modal-container')
//         let submit = document.querySelector('#submit')[0]
        
//         //close modal when submit is clicked
//         submit.addEventListener('submit', () => {
//             modal_container.style.display = "none";
//         })
//     }


    //     // const data = {player: {username}}
    //     fetch("http://localhost:3000/api/v1/players", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             username: username
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(player => {
    //         // renderPlayerProfile(player) //figure this out
    //         console.log(player) playerStats()
    //     })
    

    // fetchAndLoadPlayer() {
    //     this.adapter
    //     .getPlayers() //fetches the API
    //     .then(players => {
    //         players.data.forEach(player => this.renderPlayer(player))
    //     })  
    // }

    // renderLogin(e) {
    //     e.preventDefault()
    //     const usernameInput = e.target.querySelector("#input-username").value
    //     document.addEventListener("submit", this.fetchAndLoadPlayer())
    //     this.loginFetch(usernameInput)
    // }

    


}


// Form for username
// const usernameForm = document.querySelector("#create-username-form")
// usernameForm.addEventListener("submit", (e) => usernameFormHandler(e))

// // GET request for player
// function getPlayer() {
//     fetch("http://localhost:3000/api/v1/games") --->should this be the ..player/player_id?
//     .then(response => response.json())
//     .then(players => {
//         players.data.forEach(player => {
//             console.log(player) //needs more
//         });
//     })
// }

// // POST request

// // where I will be handling all my values for username inputs

// function usernameFormHandler(e) {
//     e.preventDefault()
//     const usernameInput = e.target.querySelector("#input-username").value
//     usernameFetch(usernameInput)
// }

// function usernameFetch(username) {
//     // const data = {player: {username}}
//     fetch("http://localhost:3000/api/v1/players", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             username: username
//         })
//     })
//     .then(response => response.json())
//     .then(player => {
//         // renderPlayerProfile(player) //figure this out
//         console.log(player)
//     })
//  }

// function renderPlayerProfile() {
//     console.log("player profile") //need to figure this out
// }