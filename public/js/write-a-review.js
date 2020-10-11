
document.addEventListener('DOMContentLoaded', async () => {

    const token = localStorage.getItem("HANGRY_ACCESS_TOKEN");
    const id = localStorage.getItem("HANGRY_CURRENT_USER_ID");
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



    const userId = localStorage.getItem('HANGRY_CURRENT_USER_ID');
    // const token = localStorage.getItem('HANGRY_ACCESS_TOKEN');
    const writeReviewButton = document.querySelector('.write-review__submit-button');
    const writeReviewForm = document.querySelector('.write-review__form');
    const restaurantId = window.location.href.match(/\/(\d+)\//)[1];
    console.log(restaurantId);
    writeReviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(writeReviewForm);
        const rating = await formData.get('rating');
        const description = await formData.get('description');

        try {
            const res = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ rating, description, userId })
            })
            if (!res.ok) {
                throw res;
            } else {
                window.location.href = `/restaurants/${restaurantId}`;
            }
        }
        catch (err) {
            console.log(err);
        }

    })

    //fetching restaurant name for .restaurant-name div
    const restaurantName2 = document.querySelector('.restaurant-name');
    try {
        const res = await fetch(`/api/restaurants/${restaurantId}`, {
            headers: {
                Authenticate: `Bearer ${token}`
            },
        });
        const { restaurant, averageRating } = await res.json();


        const {
            name, phone, city, state, address, foodCategory,
            dineIn, takeOut, delivery, userId, Reviews, Images
        } = restaurant;


        // checking if the restaurant has reviews if it is not returning with 'No reviews yet' text

        restaurantName2.innerHTML = `<h2>${name}</h2>`;



    } catch (err) {
        console.log(err)
    }


})
