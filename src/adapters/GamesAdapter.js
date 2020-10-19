class GamesAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/games"
    }

    //GET Game
    getGames() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}

// adapter = new GameAdapter()
// const games = adapter.getGames
