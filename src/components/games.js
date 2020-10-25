class Games {
    constructor() {
        this.games = []
        this.cardsList = []
        this.adapter = new GamesAdapter()
        // this.cards = new Cards()
        this.fetchAndLoadGame()
        this.bindEventListeners()
        this.cardsChosen = []
        this.cardsChosenId = []
        this.cardsWon = []
        //this.flipCard()
        // this.renderCards()
        // this.generateGameBoard()
    }

    bindEventListeners() {
        this.cardsContainer = document.getElementById('grid')
    }

    fetchAndLoadGame() {
        this.adapter
            .getGames() //fetches the API
            .then(games => {
                games.data[0].attributes.cards.forEach(card => this.cardsList(card))
            })
            .then(() => {
                this.renderCards()
            })    
    }
    
   
    renderCards() {
        //sort them randomly
        //display back of cards
        //add event listener for each click
        //put them into a chosen cards array
        //if there are 2 cards, then look for a match
        //if no match, then flip them back over
        //if it is a match, then keep them face up and score + 1
        for (let i = 0; i < this.cardsArray.length; i++) {
            //console.log(this.games[i].image_url)
            //for each card create an element 'img' and set the 'src' to a specific image
            
            let card = document.createElement('img')
            card.setAttribute('src', "/src/images/BackOfCard.png")
            card.setAttribute('id', i)
            //card.sort(() => 0.5 - Math.random())
            this.cardsContainer.appendChild(card)
            
            card.forEach(c => console.log(c))

            this.flipCard()
            
            // console.log(clickedCard)
            // e => {
                //     this.flipCard().apply(this,[clickedCard])
                
                // }
                //}) 
                //console.log(this.cardsContainer)
                // ^ seems like I need to pass this and the card local variable into the class function
        }

    }



    //gets each attribute from this.games array in Games class and displays the cards in the grid.
    // renderCards() {
    //     //get the cards
    //     //this.cardsArray = this.games.map(cards => cards)
    //     // console.log(this.cardsArray)
    //     //sort them randomly
        
    //     // this.games.forEach(card => {
    //     //     return card * 2
    //     // })
    //     // console.log(this.games)
        
    //     ////generate the board
        
    // }
    
        
        ////how do i test the eventlistener? i don't think it's listening
        
        ///flip the selected card
//     flipCard() {
//         console.log(this.games)
//         // let id = this.games.id
//         // id.addEventListener("click", this.flipCard())//clickedCard => {
// //    //image_url is the only thing that matches right now because they all have different ids.
// //     let cardId = document.querySelector('image_url')
    
// //     this.cardsChosen.push(this.games[cardId])
// //     this.cardsChosenId.push(cardId)
    
// //     //cardId.setAttribute('src', this.games[cardId])
// //     if (this.cardsChosen.length === 2) {
// //         this.checkForMatch()
//     }
        
    
    // //checks for match
    // checkForMatch() {
    //     let cards = document.querySelectorAll('img')
    //     const optionOneId = this.cardsChosenId[0]
    //     const optionTwoId = this.cardsChosenId[1]
    //     if (this.cardsChosen[0] === this.cardsChosen[1]) {
    //         //alert('It\'s a match!')
    //         this.cardsWon.push(this.cardsChosen)
    //     } else {
    //         cards[optionOneId].setAttribute('src', '../images/backofcard.png')
    //         cards[optionTwoId].setAttribute('src', '../images/backofcard.png')
    //         // alert('Sorry, try again')
    //     }
    //     if (this.cardsWon.length === this.games.length/2) {
    //         // alert('Congratulations, Winner!!')
    //     }
    // }




}

