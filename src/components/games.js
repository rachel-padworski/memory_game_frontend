class Games {
    constructor() {
        this.games = []
        this.adapter = new GamesAdapter()
        // this.cards = new Cards()
        this.fetchAndLoadGame()
        this.bindEventListeners()
        this.cardsList = []
        this.cardsChosen = []
        this.cardsChosenId = []
        this.cardsWon = []
        
        // this.renderCards()
        // this.generateGameBoard()
    }

    fetchAndLoadGame() {
        this.adapter
            .getGames() //fetches the API
            .then(games => {
                games.data[0].attributes.cards.forEach(card => this.games.push(card))
                // games.data.forEach(game => 
                    // console.log(game)
                    //this.games.push(new Game(game))//(game.attributes.cards)
                //)
            })
        
            .then(() => {
                this.renderCards()
            })    
    }
   

    bindEventListeners() {
        this.cardsContainer = document.getElementById('grid')
    }

    //gets each attribute from this.games array in Games class and displays the cards in the grid.
    renderCards() {
        //get the cards
        const cardsArray = this.games.map(cards => cards.image_url)
        
        //sort them randomly
        cardsArray.sort(() => 0.5 - Math.random())
        
        //generate the board
        
        for (let i = 0; i < cardsArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/backofcard.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            this.cardsContainer.appendChild(card)
        }



        //add them to the cardsContainer grid
        // this.cardsContainer.innerHTML += cardsArray

        // const gameGrid = document.getElementById('grid')
        // const resultDisplay = document.getElementById('result')
      
        // gameGrid.innerHTML += cardsArray
    }

    // generateGameBoard() {
    //     for (let i = 0; i < cardsArray.length; i++) {
    //                 let card = document.createElement('img')
    //                 card.setAttribute('src', 'images/backofcard.png')
    //                 card.setAttribute('data-id', i)
    //                 card.addEventListener('click', flipcard)
    //                 grid.appendChild(card)
    //             }
    // }
   //renderCards() {
        // const cardsArray = this.games.map(game => game.cards)
        // cardsArray.sort(() => 0.5 - Math.random())

        // const gameGrid = document.getElementById('grid')
        // const resultDisplay = document.getElementById('result')
        // let cardsChosen = []
        // let cardsChosenId = []
        // let cardsWon = []
        // gameGrid.innerHTML += cardsArray
   //}

}

