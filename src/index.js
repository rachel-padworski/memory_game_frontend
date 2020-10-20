const app = new App()





///////////////////



// cardArray.sort(() => 0.5 - Math.random())

// const grid = document.querySelector('.grid')
// const resultDisplay = document.querySelector('#result')
// let cardsChosen = []
// let cardsChosenId = []
// let cardsWon =[]

// function generateGameBoard() {
//     for (let i = 0; i < cardArray.length; i++) {
//         let card = document.createElement('img')
//         card.setAttribute('src', 'images/backofcard.png')
//         card.setAttribute('data-id', i)
//         card.addEventListener('click', flipcard)
//         grid.appendChild(card)
//     }
// }

// // check for matches
// function checkForMatch() {
//     let cards = document.querySelectorAll('img')
//     const optionOneId = cardsChosenId[0]
//     const optionTwoId = cardsChosenId[1]
//     if (cardsChosen[0] === cardsChosen[1]) {
//         alert('It\'s a match!')
//         cardsWon.push(cardsChosen)
//     } else {
//         cards[optionOneId].setAttribute('src', 'images/backofcard.png')
//         cards[optionTwoId].setAttribute('src', 'images/backofcard.png')
//         alert('Sorry, try again')
//     }
//     cardsChosen = []
//     cardsChosenId = []
//     resultDisplay.textContent = cardsWon.length 
//     if (cardsWon.length === cardArray.length/2) {
//         resultDisplay.textContent = 'Congratulations, Winner!'
//     }
// }

// //flip the selected card
// function flipcard() {
//     let cardId = this.getAttribute('data-id')
//     cardsChosen.push(cardArray[cardId].name)
//     cardsChosenId.push(cardId)
//     this.setAttribute('src', cardArray[cardId].img)
//     if (cardsChosen.length === 2) {
//         setTimeout(checkForMatch, 500)
//     }
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








    
// const cardArray = [
//     {
//         name: 'felix',
//         img: 'images/Felix100x100.png'
//     },
//     {
//         name: 'gene',
//         img: 'images/Gene100x100.png'
//     },
//     {
//         name: 'king-candy',
//         img: 'images/KingCandy100x100.png'
//     },
//     {
//         name: 'qbert',
//         img: 'images/Qbert100x100.png'
//     },
//     {
//         name: 'ralph',
//         img: 'images/Ralph100x100.png'
//     },
//     {
//         name: 'rancis-fluggerbutter',
//         img: 'images/RancisFluggerbutter100x100.png'
//     },
//     {
//         name: 'sargeant-calhoun',
//         img: 'images/SargeantCalhoun100x100.png'
//     },
//     {
//         name: 'sour-bill',
//         img: 'images/SourBill100x100.png'
//     },
//     {
//         name: 'taffyta-muttonfudge',
//         img: 'images/TaffytaMuttonfudge100x100.png'
//     },
//     {
//         name: 'vanellope-on-ralph',
//         img: 'images/VanellopeOnRalph100x100.png'
//     },
//     {
//         name: 'vanellope-von-schweetz',
//         img: 'images/VanellopeVonSchweetz100x100.png'
//     },
//     {
//         name: 'wynchal-and-duncan',
//         img: 'images/WynchalAndDuncan100x100.png'
//     },
// ]