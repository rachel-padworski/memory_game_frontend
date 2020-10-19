class Games {
    constructor() {
        this.games = []
        this.adapter = new GamesAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadGames()
    }

    fetchAndLoadGames() {
        this.adapter
            .getGames()
            .then(games => {
                games.forEach(game => this.games.push(new Game(game)))
                console.log(this.games)
            })
            .then(()=> {
                this.render()
            })
    }

    render() {
        const gameGrid = document.getElementById("grid")
        gameGrid.innerHTML = 'my game'
        console.log('games', this.games)
    }

}

