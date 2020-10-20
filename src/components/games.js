class Games {
    constructor() {
        // this.games = []
        this.adapter = new GamesAdapter()
        //this.bindEventListeners()
        this.newGame = new Game()
        this.fetchAndLoadGame()
    }

    fetchAndLoadGame() {
        this.adapter
            .getGames() //fetches the API
            .then(games => {
                games.data.forEach(game => {
                    this.newGame(game, game.attributes)
                    document.querySelector('#grid').innerHTML += newGame.renderCards()
                })
            })
    }

   

}

