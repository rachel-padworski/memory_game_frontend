class Cards {
    constructor() {
        this.cardsChosen = []
        this.cardsChosenId = []
        this.cardsWon = []
    }

    renderCards() {
        const cardsArray = this.games.map(game => game.cards)
        cardsArray.sort(() => 0.5 - Math.random())

        const gameGrid = document.getElementById('grid')
        const resultDisplay = document.getElementById('result')
      
        // gameGrid.innerHTML += cardsArray
   }
 



}