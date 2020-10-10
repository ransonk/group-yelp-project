const deleteButton = document.querySelector('.restaurant__delete-button')
const writeReviewButton = document.querySelector('.write-review-button');
const imageBar = document.querySelector('.image-bar');
const restaurantName = document.querySelector('.restaurant-name');
// const restaurantRating = document.querySelector('.restaurant-rating');

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

const restaurantId = window.location.href.match(/\/(\d+)$/)[1]

// instantiating map objecct
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 13 // starting zoom
    });
const baseUrl = `${mapboxgl.baseApiUrl + '/geocoding/v5/mapbox.places/'}`;

// adding marker to map

document.addEventListener('DOMContentLoaded', async () => {

    // const token = localStorage.getItem("HANGRY_ACCESS_TOKEN");
    const currentUserId = localStorage.getItem("HANGRY_CURRENT_USER_ID");
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

        // anchor element for directions
        let anchorEl;

        // making query to forward geocoding api
        const queryUrl = new URL(`${address + ' ' + city + ' ' + state}.json?limit=1&access_token=${mapboxgl.accessToken}`, baseUrl).href;
        fetch(queryUrl, {
            headers: {
                accept: 'application/json'
            }
        }).then(body => body.json())
        .then(data => {
            const coords = data.features[0].center;
            anchorEl = document.createElement('a');
            anchorEl.innerText = "Get Directions"
            // const getDirectionButton = document.createElement('span');
            // getDirectionButton.innerText = 'Get Direction';
            // getDirectionButton.appendChild(anchorEl)
            anchorEl.setAttribute('href', `https://www.google.com/maps/search/?q=${coords[1]},${coords[0]}`);
            anchorEl.setAttribute('target', '_blank');
            mapContainer.appendChild(anchorEl);
            //adding marker to map
            map.setCenter(coords);
            new mapboxgl.Marker({ color: '#f43939'}).setLngLat(coords).addTo(map)
        })
      // checking if the restaurant has reviews if it is not returning with 'No reviews yet' text
            if (averageRating === 0) {
                starsBar.innerHTML = "No reviews yet";
            } else {
                starsBar.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(averageRating)}</span>`
            }
            //     starsBar.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(averageRating)}</span>`
            // }
            // else if (averageRating === 1) {
            //     starsBar.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(1)}</span>`
            // } else if (averageRating === 2) {
            //     starsBar.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(2)}</span>`
            // } else if (averageRating === 3) {
            //     starsBar.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(3)}</span>`
            // } else if (averageRating === 4) {
            //     starsBar.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(4)}</span>`
            // } else if (averageRating === 5) {
            //     starsBar.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(5)}</span>`
            // }
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
        const locationCityNode = document.createElement('p');
        const locationStateNode = document.createElement('p');
        
        locationAddressNode.innerHTML = `<p>${address} ${city} ${state}</p>`
        //s
        
        // locationStateNode.innerText =  `${state}`;
        // locationHoursContainer.appendChild(locationNode)
        const mapContainer = document.querySelector('.address-container');
        mapContainer.appendChild(locationAddressNode);
        // mapContainer.appendChild(locationCityNode);
        // mapContainer.appendChild(locationStateNode)
        
        
        
        const reviewsArray = Reviews.map(({ id, User, description, rating, userId }) => {
            
            // const reviewBox = document.createElement('div');
            // const reviewDiv = document.createElement('div');
            // reviewDiv.setAttribute('class', 'reviews__review-div')
            // if (userId.toString() === currentUserId) {
            //     reviewDiv.innerHTML += `
            //         <button class="restaurant__review-delete-button" value=${id}>delete</button>
            //         <button class="restaurant__review-edit-button" value="${id}">edit</button>
            //     `
            // }
            // return reviewDiv.innerHTML += `
            const reviewModifyButtons = userId.toString() === currentUserId ? 
                `<button class="restaurant__review-delete-button" value=${id}>delete</button>
                <button class="restaurant__review-edit-button" value="${id}">edit</button>`   
         : ''; 
            return (
            `<div class="reviews__review-div">
                ${reviewModifyButtons}
                <div class="review__user">
                    <a href="/user/${User.id}">
                    <img class="review__user--image" src="${User.profileUrl}"/>
                    </a>
                    <a class="review__user--name" href="/user/${User.id}">
                    <h3>${User.firstName} ${User.lastName}</h3>
                    </a>
                </div>
                <div class="review__description--container">
                    <div class="review__rating">
                        <p>${`<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(averageRating)}</span>`}</p>
                    </div>
                    <div class="review__description">
                        <p>${description}</p>
                    </div>
                </div>
            </div>`)
        })
        const reviewsHTML = reviewsArray.join('');
        // console.log(reviewsArray)
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
