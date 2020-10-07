// const restaurant = require("../../db/models/restaurant");

const restaurant = require("../../db/models/restaurant");

const fetchRestaurants = async (input) => {
    const res = await fetch('/api/restaurants');
    const { restaurants } = await res.json();
    if (!input) {
        return restaurants;
    } else {
        // console.log(input);
        return restaurants.filter(restaurant => {
            return restaurant.name.toLowerCase().includes(input.toLowerCase());
        })
    }
}

const fetchRestaurant = async (restaurantId) => {
    const res = await fetch(`/api/restaurants/${restaurantId}`);

}

document.addEventListener('DOMContentLoaded', () => {
    const restaurantsContainer = document.querySelector('.restaurants-container');
    const search = document.querySelector('.search')
    search.addEventListener('submit', async (e) => {
        e.preventDefault();
        restaurantsContainer.innerHTML = '';
        const formData = new FormData(search);
        const input = formData.get('search')
        try {
            const results = await fetchRestaurants(input);
            console.log(results);
            const restaurantsHTML = results.map(
                ({ name, address, city, state, phone, Reviews, Images, foodCategory }) => {
                    let review;
                    let rating;
                    if (Reviews.length) {
                        review = Reviews[0].description;
                        rating = Reviews.reduce((accum, ele) => {
                            return accum + ele.rating;
                        }, 0);
                        rating /= Reviews.length;
                        console.log("Review and rating: ", review, rating)
                    } else {
                        // set something for review
                    }
                    let imgUrl;
                    if (!Images.length) {
                        imgUrl = '';
                    } else {
                        imgUrl = Images[0].url;
                    }
                    // const restaurantDiv = document.createElement('div');
                    // restaurantDiv.setAttribute('class', 'restaurant-div');
                    // restaurantDiv.innerHTML = `
                    console.log(name, address, city, state, phone, Reviews, Images, foodCategory)
                    return `
                    <div class='resDiv'>
                        <img src='${imgUrl}'>
                        <div class='search__restaurant-name'>
                        <h2>${name}</h2>
                        </div>
                        <div class='search__rating'>
                        <p>${rating}</p>
                        </div>
                        <div class='search__review'>
                        <p>${review}</p>
                        </div>
                        <div class='address'>
                        <p>${phone}</p>
                        <p>${address}</p>
                        <p>${city}, ${state}</p>
                        </div>
                    </div>
                    `
                })
            const resHTML = restaurantsHTML.join('');
            restaurantsContainer.innerHTML += resHTML;
        }
        catch (err) {

        }
    })
})
