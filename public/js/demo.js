document.addEventListener("DOMContentLoaded", (event) => {
    /////////////////database must have a demo user and save the token and hard code in here //////////////
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNiwiZW1haWwiOiJkZW1vQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MDIzODExNDYsImV4cCI6MzAwMDAwMDAxNjAyMzgxMTAwfQ.5dGdnAwu-lxUHI_lHmKw35luKWQOuBH200oG_yn2F6Y"
    const id = 26;

    localStorage.setItem("HANGRY_ACCESS_TOKEN", token)
    localStorage.setItem("HANGRY_CURRENT_USER_ID", id)

    const demoPicture = document.querySelector(".demo__picture");
    const demoBubble = document.querySelector(".demo__bubble");
    const firstButton = document.querySelector(".next_button1")
    const secondButton = document.querySelector(".next_button2")
    secondButton.classList.add("hidden")
    firstButton.addEventListener("click", (event) => {
        firstButton.classList.add("hidden")
        secondButton.classList.remove("hidden")
        demoBubble.classList.remove("demo__bubble")
        demoBubble.classList.add("demo__bubble2")
    })
    secondButton.addEventListener("click", (event) => {
        window.location.href = '/'
    })
})
