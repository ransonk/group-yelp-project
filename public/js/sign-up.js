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
    const businessOwer = formData.get("businessOwner")
    const body = { firstName, lastName, email, password, confirmPassword, businessOwer }
    console.log(body)
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
        const token = res.token;
        const id = res.user.id;
        console.log(token, id)
        // localStorage.setItem("HANGRY_ACCESS_TOKEN", token);
        // localStorage.setItem("HANGRY_CURRENT_USER_ID", id);
        // window.location.herf = '/';
    } catch (err) {
        handleErrors(err)
    }

})
