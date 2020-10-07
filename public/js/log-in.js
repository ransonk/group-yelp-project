import { handleErrors } from "./utils.js"
const logInForm = document.querySelector(".log-in-form");

logInForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const formData = new FormData(logInForm);
    const email = formData.get("email");
    const password = formData.get("password");
    const body = { email, password };

    try {

        const res = await fetch("/api/user/token", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
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
        window.location.href = previousPage;
    } catch (err) {
        console.log(err);
        // handleErrors(err)
    }
})
