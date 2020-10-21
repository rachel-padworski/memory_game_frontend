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
        //this.flipCard()
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
        this.cardsArray = this.games.map(cards => cards * 2)
        console.log(this.cardsArray)
        //sort them randomly
        this.cardsArray.sort(() => 0.5 - Math.random())
        
        ////generate the board
        // cardsArray.forEach(card => 
        //     card = document.createElement('img')
        //     card.setAttribute('src', 'images/backofcard.png')
        //     card.setAttribute('data-id')
        //     this.cardsContainer.appendChild(card)
            // )
        for (let i = 0; i < this.cardsArray.length; i++) {
            this.card = document.createElement('img')
            this.card.setAttribute('src', 'src/images/backofcard.png')
            this.card.setAttribute('id', i)
            this.cardsContainer.appendChild(this.card)
            this.card.addEventListener('click', this.flipCard())
        }
    }

    ///flip the selected card
    flipCard() {
        let cardId = document.getElementById('id')
        this.cardsChosen.push(this.cardsArray[cardId])
        this.cardsChosenId.push(cardId)
        this.card.setAttribute('src', this.cardsArray[cardId])
        if (this.cardsChosen.length === 2) {
            this.checkForMatch()
        }
    }

    //checks for match
    checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = this.cardsChosenId[0]
        const optionTwoId = this.cardsChosenId[1]
        if (this.cardsChosen[0] === this.cardsChosen[1]) {
            alert('It\'s a match!')
            this.cardsWon.push(this.cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/backofcard.png')
            cards[optionTwoId].setAttribute('src', 'images/backofcard.png')
            alert('Sorry, try again')
        }
        if (this.cardsWon.length === this.cardsArray.length/2) {
            alert('Congratulations, Winner!!')
        }
    }




}

