class Card {
    
    static all = []
    static cardsChosen = []
    static cardsWon = []

    constructor(cards) {
        this.id = cards.id
        this.title = cards.title
        this.image_url = cards.image_url
        Card.all.push(this)
        
    }

    // function createBoard() {
    //     for (let i = 0; i < cardsArray.length; i++) {
        //     }
        
    render() {
        const grid = document.querySelector('.grid')
        let card = document.createElement('img')
        card.setAttribute('src', "../src/images/BackOfCard.png")
        card.setAttribute('id', this.id)
        this.eventListener = this.flipCard.bind(this)
        card.addEventListener('click', this.eventListener)
        card.className = "card"
        grid.appendChild(card)
        this.domObj = card
    }



    flipCard() {
        Card.cardsChosen.push(this)
        console.log(Card.cardsChosen)
        this.domObj.setAttribute('src', this.image_url)
        if (Card.cardsChosen.length === 2) {
            setTimeout(this.checkAndReset.bind(this), 500)
        }
    }

    checkAndReset() {
        console.log(this.checkCardsChosen())
        if (this.checkCardsChosen()) {
            this.addWonCards()
            Card.cardsChosen = []
        } else {
            this.resetCards()
        }
    }

    checkCardsChosen() {
        return Card.cardsChosen[0].title === Card.cardsChosen[1].title
    }

    removeEventListener(){
        this.domObj.removeEventListener('click', this.eventListener)
    }

    addWonCards() {
        for( let card of Card.cardsChosen){
            card.removeEventListener()
        }
        Card.cardsWon.push(Card.cardsChosen)
        // printScore(Card.cardsWon.length)
    }

    resetCards() {
        for(let card of Card.cardsChosen) {
            card.domObj.setAttribute('src', "../src/images/BackOfCard.png")
            
        }
        Card.cardsChosen = []
    }
   
}
