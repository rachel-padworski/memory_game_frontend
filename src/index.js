// const app = new App()

console.log("DOM IS LOADED")

const endPoint = "http://localhost:3000/api/v1/games"
let cardsArray = []
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
cardsArray.sort(() => 0.5 - Math.random())

function getGame() {
    fetch(endPoint)
    .then(response => response.json())
    .then(games => {
        // console.log(games.data[0].attributes.cards)
        games.data[0].attributes.cards.forEach(cards => {
            
            // console.log(cards)
            let newCard = new Card(cards)
            // console.log(newCard)
            cardsArray.push(newCard)
            //     console.log(card)
            //     // cardsArray.push(card)
        })    
    })
}
getGame()

function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', "../src/images/BackOfCard.png")
        card.setAttribute('id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
createBoard()

//flip the selected cards
function flipCard() {
    let cardId = this.getAttribute('id')
    cardsChosen.push(cardsArray[cardId].title)
    cardsChosen.push(cardId)
    this.setAttribute('src', cardsArray[cardId].image_url)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

//checks for a match
function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', "../src/images/BackOfCard.png")
        cards[optionTwoId].setAttribute('src', "../src/images/BackOfCard.png")        
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardsArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found all matches!'
    }
}