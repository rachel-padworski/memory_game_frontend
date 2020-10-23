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
        //this.cardsArray = this.games.map(cards => cards)
        // console.log(this.cardsArray)
        //sort them randomly
        this.games.forEach(card => {
            return card * 2
        })
        console.log(this.games)
        this.games.sort(() => 0.5 - Math.random())
        
        ////generate the board
        
        for (let i = 0; i < this.games.length; i++) {
            //console.log(this.games[i].image_url)
            //for each card create an element 'img' and set the 'src' to a specific image
            
            let card = document.createElement('img')
            card.setAttribute('src', "/src/images/BackOfCard.png")
            card.setAttribute('id', i)
            this.cardsContainer.appendChild(card)
            card.addEventListener("click", this.flipCard())
            // card.addEventListener("click", clickedCard => {
            //     e => {
            //         this.flipCard().apply(this,[clickedCard])
                    
            //     }
            //}) 
            //console.log(this.cardsContainer)
            // ^ seems like I need to pass this and the card local variable into the class function
        }
    }
    
////how do i test the eventlistener? i don't think it's listening

    ///flip the selected card
    flipCard() {
       //image_url is the only thing that matches right now because they all have different ids.
        let cardId = document.querySelector('image_url')
        
        this.cardsChosen.push(this.games[cardId])
        this.cardsChosenId.push(cardId)
        
        //cardId.setAttribute('src', this.games[cardId])
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
            //alert('It\'s a match!')
            this.cardsWon.push(this.cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', '../images/backofcard.png')
            cards[optionTwoId].setAttribute('src', '../images/backofcard.png')
            // alert('Sorry, try again')
        }
        if (this.cardsWon.length === this.games.length/2) {
            // alert('Congratulations, Winner!!')
        }
    }




}

