document.addEventListener("DOMContentLoaded", (event) => {
    /////////////////database must have a demo user and save the token and hard code in here //////////////

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozMCwiZW1haWwiOiJkZW1vQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MDI0NjI0MTgsImV4cCI6MzAwMDAwMDAxNjAyNDYyNDAwfQ.yJfx5wOnNecg1920eEZUufNii81myY82lkBHDAFSick"
    const id = 30;

    localStorage.setItem("HANGRY_ACCESS_TOKEN", token)
    localStorage.setItem("HANGRY_CURRENT_USER_ID", id)

    const demoPicture = document.querySelector(".demo__picture");
    const demoBubble = document.querySelector(".demo__bubble");
    const demoBubble2 = document.querySelector(".demo__bubble2");

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
        setTimeout(function () {
            demoBubble.classList.add("hidden")
            secondButton.classList.add("fade-in")
            secondButton.classList.remove("hidden")
            demoBubble2.classList.add("fade-in")
            demoBubble2.classList.add("demo__bubble2")
            demoBubble2.classList.remove("hidden")
        }, 2000)
    })

    secondButton.addEventListener("click", (event) => {
        secondButton.classList.add("fade-out")
        demoBubble2.classList.add("fade-out")


        setTimeout(function () {
            demoBubble2.classList.add("hidden")
            secondButton.classList.add("hidden")

            window.location.href = '/'
        }, 2000)
    })
})
