import { handleErrors } from "./utils.js"

document.addEventListener('DOMContentLoaded', async () => {

  const token = localStorage.getItem("HANGRY_ACCESS_TOKEN")
  const id = localStorage.getItem("HANGRY_CURRENT_USER_ID")

  const body = { token, id }
  const res = await fetch("/api/user/check", {
    method: "POST",
    body: JSON.stringify(body),
    headers:
      { "Content-Type": "application/json" },
  })

  const loggedInStatus = await res.json();

  document.querySelector('#my-business').addEventListener('click', async (e) => {
    const res = await fetch(`/api/restaurants/user/${id}/restaurant`);

    const { restaurant } = await res.json();
    if (!restaurant) {

      window.location.href = "/my-business"
      // console.log('need to create business page')
    } else {

      const restaurantId = restaurant.id;
      window.location.href = `/restaurants/${restaurantId}`;
    }
  })

  if (loggedInStatus.result === "Non-business Owner Token") {
    document.querySelector('#sign-up').classList.add('hidden')
    document.querySelector('#log-in').classList.add('hidden')
    document.querySelector('#profile').classList.remove('hidden')
    document.querySelector('#log-out').classList.remove('hidden')
    document.querySelector('#my-business').classList.add('hidden')
  } else if (loggedInStatus.result === "Business Owner Token") {
    document.querySelector('#sign-up').classList.add('hidden')
    document.querySelector('#log-in').classList.add('hidden')
    document.querySelector('#profile').classList.remove('hidden')
    document.querySelector('#log-out').classList.remove('hidden')
    document.querySelector('#my-business').classList.remove('hidden')
  } else if (loggedInStatus.result === "Bad User Token") {
    document.querySelector('#sign-up').classList.remove('hidden')
    document.querySelector('#log-in').classList.remove('hidden')
    document.querySelector('#profile').classList.add('hidden')
    document.querySelector('#log-out').classList.add('hidden')
    document.querySelector('#my-business').classList.add('hidden')
  }

  //logout event listener
  document.querySelector('#log-out')
    .addEventListener('click', () => {
      localStorage.removeItem("HANGRY_ACCESS_TOKEN")
      localStorage.removeItem("HANGRY_CURRENT_USER_ID")
      window.location.href = '/';
    })

  document.getElementById('profile').addEventListener('click', async () => {
    // window.location.href = `/`
    window.location.href = `/user/${id}`
  })


  // const id = localStorage.getItem("HANGRY_CURRENT_USER_ID")
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
        console.log(res)
        throw res
      }
      const restaurants = await res.json()
      const restaurantsId = restaurants.restaurant.id

      window.location.href = `/restaurants/${restaurantsId}`

    } catch (err) {
      handleErrors(err)
    }





  })

})
