import { handleErrors } from "./utils.js"

const id = localStorage.getItem("HANGRY_CURRENT_USER_ID")
const myBusinessForm = document.querySelector(".my-business-form")
const myBusinessFormButton = document.querySelector(".my-business-sign-up-button")
myBusinessFormButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const formData = new FormData(myBusinessForm)

  const name = formData.get("name")
  const phone = formData.get("phone")
  const city = formData.get("city")
  const state = formData.get("state")
  const address = formData.get("address")
  const foodCategory = formData.get("foodCategory")
  const dineIn = formData.get("dineIn")
  const takeOut = formData.get("takeOut")
  const delivery = formData.get("delivery")
  const userId = id;

  try {

    const res = await fetch("/api/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, city, state, address, foodCategory, dineIn, takeOut, delivery, userId })
    })

    if (!res.ok) {
      throw res
    }
    const restaurants = await res.json()
    const restaurantsId = restaurants.restaurant.id

    window.location.href = `/restaurants/${restaurantsId}`

  } catch (err) {
    handleErrors(err)
  }





})
