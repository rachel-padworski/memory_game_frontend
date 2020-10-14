    
const cardArray = [
    {
        name: 'felix',
        img: 'images/Felix100x100.png'
    },
    {
        name: 'gene',
        img: 'images/Gene100x100.png'
    },
    {
        name: 'king-candy',
        img: 'images/KingCandy100x100.png'
    },
    {
        name: 'qbert',
        img: 'images/Qbert100x100.png'
    },
    {
        name: 'ralph',
        img: 'images/Ralph100x100.png'
    },
    {
        name: 'rancis-fluggerbutter',
        img: 'images/RancisFluggerbutter100x100.png'
    },
    {
        name: 'sargeant-calhoun',
        img: 'images/SargeantCalhoun100x100.png'
    },
    {
        name: 'sour-bill',
        img: 'images/SourBill100x100.png'
    },
    {
        name: 'taffyta-muttonfudge',
        img: 'images/TaffytaMuttonfudge100x100.png'
    },
    {
        name: 'vanellope-on-ralph',
        img: 'images/VanellopeOnRalph100x100.png'
    },
    {
        name: 'vanellope-von-schweetz',
        img: 'images/VanellopeVonSchweetz100x100.png'
    },
    {
        name: 'wynchal-and-duncan',
        img: 'images/WynchalAndDuncan100x100.png'
    },
]

//GET Game
function getGame() {
    fetch("http://localhost:3000/api/v1/games")
    .then(response => response.json())
    .then(games => {
        games.data.forEach((game) => {
            // let createCards = 
            // let card = document.querySelector('#grid').innerHTML
            // card.setAttribute('src', 'images/BackOfCard.png')
            // card.setAttribute('data-id', index)
            // card.addEventListener('click', flipcard)
            // grid.appendChild(card)
        });
    })
}
// getGame()
// function flipcard() {

// }

//Form for username
// const usernameForm = document.querySelector("#create-username-form")
// usernameForm.addEventListener("submit", (e) => usernameFormHandler(e))

//GET request for player
// function getPlayer() {
//     fetch("http://localhost:3000/api/v1/games") --->should this be the ..player/player_id?
//     .then(response => response.json())
//     .then(players => {
//         players.data.forEach(player => {
//             console.log(player) //needs more
//         });
//     })
// }

//POST request

//where I will be handling all my values for username inputs
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