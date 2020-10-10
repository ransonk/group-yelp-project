document.addEventListener("DOMContentLoaded", (event) => {



    const demoPicture = document.querySelector(".demo__picture");

    const demoBubble = document.querySelector(".demo__bubble");

    // demoBubble.classList.remove(".demo__bubble2")

    const firstButton = document.querySelector(".next_button1")
    const secondButton = document.querySelector(".next_button2")
    console.log('loaded')

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