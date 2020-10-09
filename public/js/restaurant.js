const deleteButton = document.querySelector('.restaurant__delete-button')
const writeReviewButton = document.querySelector('.write-review-button');
const imageBar = document.querySelector('.image-bar');
const restaurantName = document.querySelector('.restaurant-name');
// const restaurantRating = document.querySelector('.restaurant-rating');
const starsBar = document.querySelector('.stars-bar');
const reviewCount = document.querySelector('.review-number');
const foodCategories = document.querySelector('.food-categories');
// const businessHours = document.querySelector('.business-hours');
const buttonContainer = document.querySelector('.button-container');
const servicesContainer = document.querySelector('.services-container');
const locationHoursContainer = document.querySelector('.location-and-hours-container');
const reviewsContainer = document.querySelector('.reviews-container');

const restaurantId = window.location.href.match(/\/(\d+)$/)[1]

document.addEventListener('DOMContentLoaded', async () => {

    const token = localStorage.getItem("HANGRY_ACCESS_TOKEN");
    const currentUserId = localStorage.getItem("HANGRY_CURRENT_USER_ID");





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

        restaurantName.innerHTML = `<h2>${name}</h2>`;
        starsBar.innerHTML = `Average rating: ${averageRating}`;
        reviewCount.innerHTML = `<p>${Reviews.length} reviews</p>`;
        foodCategories.innerHTML = `${foodCategory}`
        if (dineIn) {
            const dineIn = document.createElement('p');
            dineIn.innerHTML = "Sit-down Dining";
            servicesContainer.appendChild(dineIn)
        }
        if (takeOut) {
            const takeOut = document.createElement('p');
            takeOut.innerHTML = "Take out";
            servicesContainer.appendChild(takeOut)
        }
        if (delivery) {
            const delivery = document.createElement('p');
            delivery.innerHTML = "Delivery";
            servicesContainer.appendChild(delivery)
        }
        locationHoursContainer.innerHTML = `${address} ${city}, ${state}`;

        const reviewsArray = Reviews.map(({ id, User, description, rating, userId }) => {

            const reviewDiv = document.createElement('div');
            reviewDiv.setAttribute('class', 'reviews__review-div')
            if (userId.toString() === currentUserId) {
                reviewDiv.innerHTML += `
                    <button class="restaurant__review-delete-button" value=${id}>delete</button>
                    <button class="restaurant__review-edit-button" value="${id}">edit</button>
                `
            }
            return reviewDiv.innerHTML += `
            <div class="review__user">
                <a href="/user/${User.id}">
                <img src="${User.profileUrl}">
                </a>
                <a href="/user/${User.id}">
                <h3>${User.firstName} ${User.lastName}</h3>
                </a>
            </div>
            <div class="review__rating">
                <p>${rating}</p>
            </div>
            <div class="review__description">
                <p>${description}</p>
            </div>
            `
        })
        const reviewsHTML = reviewsArray.join('');
        reviewsContainer.innerHTML += reviewsHTML;


    } catch (err) {
        console.log(err)
    }
    writeReviewButton.addEventListener('click', (e) => {
        window.location.href = `/restaurants/${restaurantId}/reviews/new`;
    })
    deleteButton.addEventListener('click', async (e) => {
        const token = localStorage.getItem("HANGRY_ACCESS_TOKEN");
        const id = localStorage.getItem("HANGRY_CURRENT_USER_ID");
        const res = await fetch(`/api/restaurants/${restaurantId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ id, token })
        })
        const resJSON = await res.json();
        if (resJSON.msg === "Restaurant Deleted") {
            window.location.href = '/';
        }
    })

    const deleteReviewButton = document.querySelector('.restaurant__review-delete-button');
    const editReviewButton = document.querySelector('.restaurant__review-edit-button');


    try {
        const res = await fetch(`/api/restaurants/user/${currentUserId}`)
        const result = await res.json()
        console.log(result)
    } catch (err) {
        console.log(err)
    }









    deleteReviewButton.addEventListener('click', async (e) => {
        e.preventDefault()
        const reviewId = e.target.value;
        try {
            const res = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    reviewId, restaurantId, currentUserId
                })
            });
            const resJSON = await res.json();
            if (resJSON.msg === "Review Deleted") {
                window.location.href = `/restaurants/${restaurantId}`;
            }
        }
        catch (err) {
            console.log(err);
        }
    })

    editReviewButton.addEventListener('click', async (e) => {
        e.preventDefault()
        const reviewId = e.target.value;

        // try {
        //     const res = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Authorization: `Bearer ${token}`
        //         },
        //         body: JSON.stringify({
        //             reviewId
        //         })
        //     });
        //     const resJSON = await res.json();
        // } catch (err) {
        //     console.log(err);
        // }
    });

})
