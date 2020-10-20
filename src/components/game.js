class Game {
    constructor(game, gameAttributes) {
        this.id = game.id
        this.title = gameAttributes.title
        this.cards = gameAttributes.cards
    }

    renderCards() {
        return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <img src=${this.cards} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.cards}</p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">Category: ${this.cards.image_url}</small>
                </div>
            </div>
            </div>
        </div>`
    }
}