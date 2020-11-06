class LoginManager {
    constructor() {
        this.establishListeners()
    }
    
    establishListeners() {
        const loginForm = document.querySelector('#submit')
        loginForm.addEventListener('submit', this.loginFormHandler)
        const createUsernameForm = document.querySelector('#create-username')
        createUsernameForm.addEventListener('click', this.createUsernameFormHandler)
    }
    
    loginFormHandler = (e) => {
        e.preventDefault()
        const usernameInput = document.querySelector('#input-username').value 
        const passwordInput = document.querySelector('#login-password').value
        e.target.innerHTML = ""
        this.loginFetch(usernameInput, passwordInput)
    }
    
    createUsernameFormHandler = (e) => {
        e.preventDefault()
        const usernameInput = document.querySelector('#input-username').value 
        const passwordInput = document.querySelector('#login-password').value
        e.target.innerHTML = ""
        this.createUserFetch(usernameInput, passwordInput)
    }

    createUserFetch(username, password) {{
        const bodyData = {player: { username, password, game_id: 1 }}

        fetch("http://localhost:3000/api/v1/players", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(json => {
            const username = json.player.data.attributes.username
            this.renderGreeting(username)
        })
    }}

    loginFetch(username, password) {
        
        const bodyData = {player: { username, password }}

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(json => {
            // this.localStorage.setItem('jwt_token', json.jwt)
            const username = json.player.data.attributes.username
            this.renderGreeting(username)
        })
    }


    renderGreeting(username) {
        const playerGreeting = document.querySelector('#player-greeting')
        playerGreeting.innerText = `Welcome, ${username}!`
        this.closeModal()
    }


    closeModal() {
        let modal_container = document.getElementById('modal-container')
        let submit = document.querySelector('#submit')
        submit.addEventListener('click', () => {
            modal_container.style.display = "none"
        })
   
    }

}