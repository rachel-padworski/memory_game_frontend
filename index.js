const endPoint = "http://localhost:3000/api/v1/games"

document.addEventListener('DOMContentLoaded', () => {
    // console.log("DOM loaded")
    getGame();
})

function getGame() {
    fetch("http://localhost:3000/api/v1/games")
    .then(response => response.json())
    .then(games => {
        games.data.forEach(game => {
            
        });
    })
    
}