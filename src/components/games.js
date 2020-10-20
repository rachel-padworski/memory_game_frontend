class Games {
    constructor() {
        this.games = []
        this.adapter = new GamesAdapter()
        // this.bindEventListeners()
        this.cards = new Cards()
        this.fetchAndLoadGame()
    }

    fetchAndLoadGame() {
        this.adapter
            .getGames() //fetches the API
            .then(games => {
                games.data.forEach(game => {
                    this.games.push(game.attributes)
                })
            })
            .then(() => {
                this.cards.renderCards()
            })
            
    }

//    renderCards() {
//         const cardsArray = this.games.map(game => game.cards)
//         cardsArray.sort(() => 0.5 - Math.random())

//         const gameGrid = document.getElementById('grid')
//         const resultDisplay = document.getElementById('result')
//         let cardsChosen = []
//         let cardsChosenId = []
//         let cardsWon = []
//         // gameGrid.innerHTML += cardsArray
//    }

}

