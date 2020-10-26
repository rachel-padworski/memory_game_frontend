// //instantiates a new instance of the games class
// class App {
//     constructor() {
//         this.games = new Games()
//         this.players = new Players()
//         this.modal()
//     }
    
    /////Modal//////
    function modal() {
        let open = document.getElementById('login')
        let modal_container = document.getElementById('modal-container')
        let close = document.getElementsByClassName('close')[0]
        //let submit = document.querySelector('.submit')

        //open modal
        open.addEventListener('click', () => {
            modal_container.style.display = "block";
            // this.players = new Players()
        })
        //close modal
        close.addEventListener('click', () => {
            modal_container.style.display = "none";
        })
        
        //close modal when submit is clicked
        // submit.addEventListener('submit', () => {
        //     modal_container.style.display = "none";
        // })

        //close modal when user clicks outside of it
        // window.addEventListener('click', () => {
        //     modal_container.style.display = "none";
        // })
    }
    
// }


