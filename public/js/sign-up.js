// const handleErrors = require("./utils.js")
import { handleErrors } from "./utils.js"
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
