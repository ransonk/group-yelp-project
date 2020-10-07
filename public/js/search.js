const fetchRestaurants = async (input) => {
    const token = localStorage.getItem("HANGRY_ACCESS_TOKEN");
    const id = localStorage.getItem("HANGRY_CURRENT_USER_ID");
    const res = await fetch('/api/restaurants', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
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
        }
        catch (err) {

        }
    })
})








module.exports = router;
