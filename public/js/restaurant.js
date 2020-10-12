import { handleErrors } from "./utils.js"
const deleteButton = document.querySelector('.restaurant__delete-button')
const writeReviewButton = document.querySelector('.write-review-button');
const imageBar = document.querySelector('.image-bar');
const restaurantName = document.querySelector('.restaurant-name');
//setting mapbox accesstoken, maybe we move this into env variables
mapboxgl.accessToken = "pk.eyJ1IjoiYW52YXJvdiIsImEiOiJja2Z1azhjNmwwc2RiMnJzMzFydmFiNXQ3In0.gsJAK7Sz7Xn8KLKn9PaPmw"
const starsBar = document.querySelector('.stars-bar');
const reviewCount = document.querySelector('.review-number');
const foodCategories = document.querySelector('.food-categories');
// const businessHours = document.querySelector('.business-hours');
const buttonContainer = document.querySelector('.button-container');
const servicesContainer = document.querySelector('.services-container');
const locationHoursContainer = document.querySelector('.location-and-hours-container');
const reviewsContainer = document.querySelector('.reviews-container');
const restaurantId = window.location.href.match(/\/(\d+)$/)[1];
const editReviewForm = document.querySelector('.edit-review-form');

// instantiating map objecct

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 13 // starting zoom
});
const baseUrl = `${mapboxgl.baseApiUrl + '/geocoding/v5/mapbox.places/'}`;


document.addEventListener('DOMContentLoaded', async () => {

    const currentUserId = localStorage.getItem("HANGRY_CURRENT_USER_ID");
    const id = localStorage.getItem("HANGRY_CURRENT_USER_ID");
    const token = localStorage.getItem("HANGRY_ACCESS_TOKEN")
    //adding verifying if this user is this restaurant's owner and show the delete button. default is hidden.....//
    deleteButton.classList.add("hidden")
    // const token = localStorage.getItem("HANGRY_ACCESS_TOKEN");
    try {
        const checkingOwnership = await fetch(`/api/restaurants/user/${currentUserId}/restaurant`)
        const checkingOwnershipJson = await checkingOwnership.json();
        const currentUsersRestaurantId = checkingOwnershipJson.restaurant.id
        if (currentUsersRestaurantId == restaurantId) {
            deleteButton.classList.remove("hidden")
        }
    } catch (err) {
        // handleErrors(err)
        deleteButton.classList.add("hidden")
    }
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



    // const searchForm = document.querySelector(".search");
    // searchForm.addEventListener("submit", async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(searchForm)
    //     const search = formData.get("search")
    //     localStorage.setItem("searchValue", search)
    //     window.location.href = `/search`
    // })


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


        //seting up pics on business page
        let imageURL = [];
        switch (foodCategory.toLowerCase()) {
            case "bar":
                imageURL.push(`<img class="newPic" src="../images/bar.jpg"/>`)
                break;
            case "chinese":
                imageURL.push(`<img class="newPic" src="../images/chinese.jpg"/>`)
                break;
            case "cafe":
                imageURL.push(`<img class="newPic" src="../images/cafe.jpg"/>`)
                break;
            case "fast food":
                imageURL.push(`<img class="newPic" src="../images/fast-food.jpg"/>`)
                break;
            case "homeStyle":
                imageURL.push(`<img class="newPic" src="../images/homeStyle.jpg"/>`)
                break;
            case "italian":
                imageURL.push(`<img class="newPic" src="../images/italian.jpg"/>`)
                break;
            case "japanese":
                imageURL.push(`<img class="newPic" src="../images/japanese.jpg"/>`)
                break;
            case "middle eastern":
                imageURL.push(`<img class="newPic" src="../images/mediterranean.jpg"/>`)
                break;
            case "mexican":
                imageURL.push(`<img class="newPic" src="../images/mexican.jpg"/>`)
                break;
            case "pizza":
                imageURL.push(`<img class="newPic" src="../images/pizza.jpg"/>`)
                break;
            case "vegetarian":
                imageURL.push(`<img class="newPic" src="../images/vegetarian.jpg"/>`)
                break;
            default:
                imageURL.push(`<img class="newPic" src="../images/default.jpg"/>`)
        }

        dineIn && imageURL.push(`<img class="newPic" src="../images/dine-in.png"/>`)
        takeOut && imageURL.push(`<img class="newPic" src="../images/takeout.jpg"/>`)
        delivery && imageURL.push(`<img class="newPic" src="../images/delivery.png"/>`)

        const imageBar = document.querySelector(".image-bar");
        imageBar.innerHTML = imageURL.join('')
        // anchor element for directions
        let anchorEl;
        // making query to forward geocoding api
        const queryUrl = new URL(`${address + ' ' + city + ' ' + state}.json?limit=1&access_token=${mapboxgl.accessToken}`, baseUrl).href;
        console.log(queryUrl)
        fetch(queryUrl, {
            headers: {
                accept: 'application/json'
            }
        }).then(body => body.json())
            .then(data => {
                const coords = data.features[0].center;
                anchorEl = document.createElement('a');
                anchorEl.innerText = "Get Directions"
                anchorEl.setAttribute('href', `https://www.google.com/maps/search/?q=${coords[1]},${coords[0]}`);
                anchorEl.setAttribute('target', '_blank');
                mapContainer.appendChild(anchorEl);
                map.setCenter(coords);
                // adding marker to map
                new mapboxgl.Marker({ color: '#f43939' }).setLngLat(coords).addTo(map)
            });
        // checking if the restaurant has reviews if it is not returning with 'No reviews yet' text
        if (averageRating === 0) {
            starsBar.innerHTML = "No reviews yet";
        } else {
            starsBar.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(averageRating)}</span>`
        }
        restaurantName.innerHTML = `<h2>${name}</h2>`;
        // starsBar.innerHTML = `Average rating: ${averageRating}`;
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
        const locationAddressNode = document.createElement('p');
        locationAddressNode.innerHTML = `<p>${address} ${city} ${state}</p>`
        const mapContainer = document.querySelector('.address-container');
        mapContainer.appendChild(locationAddressNode);
        let reviewsArray;
        if (Reviews.length !== 0) {
            reviewsArray = Reviews.map(({ id, User, description, rating, userId, createdAt }) => {
                const reviewModifyButtons = userId.toString() === currentUserId ?
                    `
                        <div class='review__buttons--container'>
                            <button class="restaurant__review-delete-button" value=${id}>delete</button>
                            <button class="restaurant__review-edit-button" value="${id}">edit</button>
                        </div>
                        `
                    : '';
                return (
                    `<div class="reviews__review-div">
                        <div class="review__user">
                            <a href="/user/${User.id}">
                            <img class="review__user--image" src="${User.profileUrl}"/>
                            </a>
                            <a class="review__user--name" href="/user/${User.id}">
                            <h3>${User.firstName} ${User.lastName}</h3>
                            </a>
                        </div>
                        <div class="review__description--container" id="review-${id}">
                            <div class="review__rating" id="review-rating-${id}">
                                <p>${`<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(rating)}</span>`}</p>
                                <em style="font-size: 14px"> Posted: ${new Date(createdAt).toLocaleString()}</em>
                            </div>
                            <div class="review__description">
                                <p id="review-description-${id}">${description}</p>
                                ${reviewModifyButtons}
                            </div>
                        </div>
                    </div>`)
            });
        } else {
            reviewsArray = ['<p>No reviews yet</p>']
        }
        const reviewsHTML = reviewsArray.join('');
        reviewsContainer.innerHTML += reviewsHTML;


    } catch (err) {
        handleErrors(err);     
    }
    writeReviewButton.addEventListener('click', (e) => {
        window.location.href = `/restaurants/${restaurantId}/reviews/new`;
    });

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

    const deleteReviewButtons = document.querySelectorAll('.restaurant__review-delete-button');
    const editReviewButtons = document.querySelectorAll('.restaurant__review-edit-button');

    // try {
    //     const res = await fetch(`/api/restaurants/user/${currentUserId}`)
    //     const result = await res.json()
    //     console.log(result)
    // } catch (err) {
    //     console.log(err)
    // }

    deleteReviewButtons.length !== 0 && deleteReviewButtons.forEach(deleteReviewButton => {
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
                // console.log(err);]
                handleErrors(err)
                //try this
            }
        })
    });


    let ratingElement, descriptionElement, reviewId;
    editReviewButtons.length !== 0 && editReviewButtons.forEach(editReviewButton => {
        editReviewButton.addEventListener('click', async (e) => {
            e.preventDefault()

            reviewId = e.target.value;
            const description = e.target;
            descriptionElement = document.getElementById(`review-description-${reviewId}`);
            ratingElement = document.getElementById(`review-rating-${reviewId}`);
            // console.log(description);
            // console.log(reviewId);


            editReviewForm.classList.remove('hidden');

        });
    })

    const submitEditReview = document.querySelector('.edit-review__form');
    submitEditReview.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = await new FormData(submitEditReview);
        const newRating = formData.get('rating');
        const newDescription = formData.get('description');
        const userId = localStorage.getItem("HANGRY_CURRENT_USER_ID");
        // const reviewId = document.getElementById(`review-${id}`);


        editReviewForm.classList.add('hidden');

        try {
            const res = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    rating: newRating,
                    description: newDescription,
                    // userId,
                    // restaurantId,
                    reviewId
                })
            });
            const { rating, description } = await res.json();
            console.log(rating, description);
            ratingElement.innerHTML = `<p>${`<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(rating)}</span>`}</p>
                                            <em style="font-size: 14px"> Posted: ${new Date().toLocaleString()}</em>`;
            descriptionElement.innerText = description;
        } catch (err) {
            console.log(err);
        }
    })

    const cancelEditReview = document.querySelector('.edit-review-cancel');
    cancelEditReview.addEventListener('click', (e) => {
        editReviewForm.classList.add('hidden');
    })
});
;
