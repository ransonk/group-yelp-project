const fetchRestaurants = async (input) => {
    const token = localStorage.getItem("HANGRY_ACCESS_TOKEN");
    const id = localStorage.getItem("HANGRY_CURRENT_USER_ID");
    let query;
    if (localStorage.getItem("searchValue")) {
        query = `/api/search/name/${localStorage.getItem("searchValue")}`;
    } else if (localStorage.getItem("foodCategory")) {
        query = `/api/search/dropdown/${localStorage.getItem("foodCategory")}`;
    } else {
        query = `/api/restaurants`;
    }

    const res = await fetch(query, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const restaurants = await res.json();
    return restaurants.results;

    // if (localStorage.getItem("searchValue")) {
    //     return restaurants.filter(restaurant => {
    //         return restaurant.name.toLowerCase().includes(localStorage.getItem("searchValue").toLowerCase());
    //     })
    // } else if (localStorage.getItem("foodCategory")) {
    //     console.log("works");
    //     console.log(localStorage.getItem("foodCategory"))
    //     restaurants.filter(restaurant => {
    //         return restaurant.foodCategory === localStorage.getItem("foodCategory");
    //     })
    // } else {
    //     return restaurants;
    // }
}

document.addEventListener('DOMContentLoaded', async () => {
    const restaurantsContainer = document.querySelector('.restaurants-container');
    if (localStorage.getItem("searchValue")) {
        const localResult = await fetchRestaurants(localStorage.getItem("searchValue"))
        console.log(localResult)
        const restaurantsHTML = localResult.map(
            ({ name, address, city, state, phone, Reviews, Images, foodCategory, id }) => {
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
                <a href="/restaurants/${id}">
                    <div class='res-div'>
                        <input type="hidden" value="${id}" class="restaurant-id">
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
                </a>`
            })
        const resHTML = restaurantsHTML.join('');
        restaurantsContainer.innerHTML += resHTML;
        localStorage.removeItem("foodCategory");
        localStorage.removeItem("searchValue");
    }

    if (localStorage.getItem("foodCategory")) {
        const localResult = await fetchRestaurants(localStorage.getItem("foodCategory").value)
        console.log(localResult);
        const restaurantsHTML = localResult.map(
            ({ name, address, city, state, phone, Reviews, Images, foodCategory, id }) => {
                let review;
                let rating;
                if (Reviews.length) {
                    review = Reviews[0].description;
                    rating = Reviews.reduce((accum, ele) => {
                        return accum + ele.rating;
                    }, 0);
                    rating /= Reviews.length;
                    // console.log("Review and rating: ", review, rating)
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
                // console.log(name, address, city, state, phone, Reviews, Images, foodCategory)
                return `
                        <a href="/restaurants/${id}">
                            <div class='res-div'>
                                <input type="hidden" value="${id}" class="restaurant-id">
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
                        </a>`
            })
        const resHTML = restaurantsHTML.join('');
        restaurantsContainer.innerHTML += resHTML;
        localStorage.removeItem("foodCategory");
        localStorage.removeItem("searchValue");
    }
    // const restaurantsContainer = document.querySelector('.restaurants-container');
    const search = document.querySelector('.search')
    search.addEventListener('submit', async (e) => {
        e.preventDefault();
        restaurantsContainer.innerHTML = '';
        const formData = new FormData(search);
        const input = formData.get('search')
        localStorage.setItem("searchValue", input);
        try {
            const results = await fetchRestaurants(input);
            // console.log(results);
            const restaurantsHTML = results.map(
                ({ name, address, city, state, phone, Reviews, Images, foodCategory, id }) => {
                    let review;
                    let rating;
                    if (Reviews.length) {
                        review = Reviews[0].description;
                        rating = Reviews.reduce((accum, ele) => {
                            return accum + ele.rating;
                        }, 0);
                        rating /= Reviews.length;
                        // console.log("Review and rating: ", review, rating)
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
                    // console.log(name, address, city, state, phone, Reviews, Images, foodCategory)
                    return `
                    <a href="/restaurants/${id}">
                        <div class='res-div'>
                            <input type="hidden" value="${id}" class="restaurant-id">
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
                    </a>`
                })
            const resHTML = restaurantsHTML.join('');
            restaurantsContainer.innerHTML += resHTML;
            localStorage.removeItem("foodCategory");
            localStorage.removeItem("searchValue");
        }
        catch (err) {

        }
    })
})
