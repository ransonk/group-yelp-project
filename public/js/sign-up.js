// const handleErrors = require("./utils.js")
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

    const signUpForm = document.querySelector(".sign-up-form")
    signUpForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("hi")

        const formData = new FormData(signUpForm);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName")
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword")
        const businessOwner = formData.get("businessOwner")
        const body = { firstName, lastName, email, password, confirmPassword, businessOwner }
        try {
            const res = await fetch("/api/user", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if (!res.ok) {
                throw res;
            }

            const userData = await res.json();

            const token = userData.token;
            const id = userData.user.id;
            const previousPage = userData.previousPage
            localStorage.setItem("HANGRY_ACCESS_TOKEN", token);
            localStorage.setItem("HANGRY_CURRENT_USER_ID", id);
            window.history.back();

        } catch (err) {
            handleErrors(err)
        }

    })
})
