document.addEventListener("DOMContentLoaded", (event) => {
    /////////////////database must have a demo user and save the token and hard code in here //////////////
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyMiwiZW1haWwiOiJkZW1vQGRlbW8uY29tIn0sImlhdCI6MTYwMjM4MzAzOCwiZXhwIjozMDAwMDAwMDE2MDIzODMwNDB9.owv7WTm0qFCqI1gfQFdx4QCxbbsMtz1x7D2viCLwmng"
    const id = 22;

    localStorage.setItem("HANGRY_ACCESS_TOKEN", token)
    localStorage.setItem("HANGRY_CURRENT_USER_ID", id)

    const demoPicture = document.querySelector(".demo__picture");
    const demoBubble = document.querySelector(".demo__bubble");
    const firstButton = document.querySelector(".next_button1")
    const secondButton = document.querySelector(".next_button2")
    secondButton.classList.add("hidden")
    // firstButton.addEventListener("click", (event) => {
    //     firstButton.classList.add("hidden")
    //     secondButton.classList.remove("hidden")
    //     demoBubble.classList.remove("demo__bubble")
    //     demoBubble.classList.add("demo__bubble2")
    //     demoBubble.classList.add("fade-in")
    // })

     firstButton.addEventListener("click", (event) => {

        demoBubble.classList.add("fade-out")
        firstButton.classList.add("hidden")
    setTimeout(function() {
    demoBubble.classList.add("hidden")
    secondButton.classList.add("fade-in")
    secondButton.classList.remove("hidden")
    demoBubble.classList.add("fade-in")
    demoBubble.classList.remove("hidden")
    demoBubble.classList.add("demo__bubble2")
    },2000)
        // demoBubble.classList.add("demo__bubble2")
 

    })

    secondButton.addEventListener("click", (event) => {
        window.location.href = '/'
    })
})
