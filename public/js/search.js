const fetchRestaurants = async (input) => {
    const token = localStorage.getItem("HANGRY_ACCESS_TOKEN");
    const id = localStorage.getItem("HANGRY_CURRENT_USER_ID");
    let query;
    if (localStorage.getItem("searchValue")) {
        query = `/api/search/name/${localStorage.getItem("searchValue")}`;
    } else if (localStorage.getItem("foodCategory")) {
        query = `/api/search/dropdown/${localStorage.getItem("foodCategory")}`;
    } else if (localStorage.getItem("services")) {
        query = `/api/search/services/${localStorage.getItem("services")}`;
        // console.log(query)
    } else {
        query = `/api/restaurants`;
        console.log(query);
    }

    const res = await fetch(query, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const restaurants = await res.json();
    return restaurants.results;

}

document.addEventListener('DOMContentLoaded', async () => {

    buttonHandler();

    const restaurantsContainer = document.querySelector('.search__restaurants-container');
    restaurantsContainer.innerHTML = '';

    if (localStorage.getItem("searchValue")) {
        const localResult = await fetchRestaurants(localStorage.getItem("searchValue"))
        console.log('search value', localResult)
        return searchRender(localResult);
    }
    if (localStorage.getItem("foodCategory")) {
        const localResult = await fetchRestaurants(localStorage.getItem("foodCategory").value)
<<<<<<< HEAD
        return searchRender(localResult);
=======
        console.log("LCOALRESULT: ", localResult);
        searchRender(localResult);
>>>>>>> master
    }
    if (localStorage.getItem("services")) {
        const localResult = await fetchRestaurants(localStorage.getItem("services"))
        console.log(localResult);
        return searchRender(localResult);
    } else {
        const results = await fetchRestaurants();
        searchRender(results)
    }



    const search = document.querySelector('.search')
    search.addEventListener('submit', async (e) => {
        e.preventDefault();
        restaurantsContainer.innerHTML = '';
        const formData = new FormData(search);
        const input = formData.get('search')
        // console.log('click', input)
        localStorage.setItem("searchValue", input);
        try {
            const results = await fetchRestaurants(input);
            searchRender(results);
        }
        catch (err) {

        }
    })
})

function searchRender(localResult) {
    const restaurantsContainer = document.querySelector('.search__restaurants-container');
    restaurantsContainer.innerHTML = `<h1 class="search-res-container__header">Restaurants</h2>`;
    const restaurantsHTML = localResult.map(
        ({ name, address, city, state, phone, Reviews, Images, foodCategory, takeOut, dineIn, delivery, id }) => {
            let review;
            let rating;
            let starRating;
            if (Reviews.length) {
                review = Reviews[0].description;
                rating = Reviews.reduce((accum, ele) => {
                    return accum + ele.rating;
                }, 0);
                rating /= Reviews.length;
<<<<<<< HEAD
                rating = Math.ceil(rating);
            }
=======
            }
>>>>>>> master
            let imgUrl;
            if (!Images.length) {
                imgUrl = '../images/imgs/hangryimg11.jpg';
            } else {
                imgUrl = Images[0].url;
            }
            let services = '';
            if (takeOut) services += "<i class='fas fa-check' style='color:green'></i> Take-out ";
            if (dineIn) services += "<i class='fas fa-check' style='color:green'></i> Dine-in ";
            if (delivery) services += "<i class='fas fa-check' style='color:green'></i> Delivery";
            console.log(services);
            if (rating === 0) {
                starRating = "No reviews yet";
            } else if (rating === 1) {
                starRating = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(1)}</span> ${rating}`
            } else if (rating === 2) {
                starRating = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(2)}</span> ${rating}`
            } else if (rating === 3) {
                starRating = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(3)}</span> ${rating}`
            } else if (rating === 4) {
                starRating = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(4)}</span> ${rating}`
            } else if (rating === 5) {
                starRating = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(5)}</span> ${rating}`
            }


            return `
                        <input type="hidden" value="${id}" class="search__restaurant-id">
                        <a href="/restaurants/${id}">
                            <div class='search__res-div'>
                                <img src='${imgUrl}' class='search__res-img'>
                                <div class='search__restaurant-name'>
                                    <h2>${name}</h2>
                                </div>
                                <div class='search__rating'>
                                    <p>${starRating}</p>
                                </div>
                                <div class='search__review'>
                                    <p>${review}</p>
                                </div>
                                <div class='search__services'>
                                    <p>${services}</p>
                                </div>
                                <div class='search__address'>
                                    <p>${phone}</p>
                                    <p>${address}</p>
                                    <p>${city}, ${state}</p>
                                </div>
                            </div>
                            <div class='search__address'>
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
    localStorage.removeItem("services");
}

async function buttonHandler() {
    const id = localStorage.getItem('HANGRY_CURRENT_USER_ID');
    const token = localStorage.getItem('HANGRY_ACCESS_TOKEN');

    console.log('in the button handler');

    const body = { token, id }
    const res = await fetch("/api/user/check", {
        method: "POST",
        body: JSON.stringify(body),
        headers:
            { "Content-Type": "application/json" },
    })
    const loggedInStatus = await res.json();
    console.log(loggedInStatus);

    const logInButton = document.querySelector('.main-nav__log-in-button')
    const signUpButton = document.querySelector('.main-nav__sign-up-button')
    const signOutButton = document.querySelector('.main-nav__log-out-button')
    const myBusinessButton = document.querySelector('.main-nav__my-business-button')

    if (loggedInStatus.result === 'Business Owner Token' || 'Non-business Owner Token') {
        logInButton.classList.add('hidden');
        signUpButton.classList.add('hidden');
        myBusinessButton.classList.remove('hidden');
        signOutButton.classList.remove('hidden');
    }
    // if (loggedInStatus.result === 'Non-business Owner Token')
    if (loggedInStatus.result === 'Bad User Token') {
        logInButton.classList.remove('hidden');
        signUpButton.classList.remove('hidden');
        myBusinessButton.classList.add('hidden');
        signOutButton.classList.add('hidden');
    }

    myBusinessButton.addEventListener('click', async () => {
        const res = await fetch(`/api/resaurants/user/${id}/restaurant`);
        const { restaurant } = await res.json();

        if (!restaurant) {
            window.location.href = '/my-business';
        } else {
            const { restaurantId } = restaurant;
            window.location.href = `/restaurants/${restaurantId}`;
        }
    })
    signOutButton.addEventListener('click', async () => {
        localStorage.removeItem("HANGRY_ACCESS_TOKEN")
        localStorage.removeItem("HANGRY_CURRENT_USER_ID")
        window.location.href = '/';
    })
    logInButton.addEventListener('click', async () => {
        window.location.href = '/log-in';
    })
    signUpButton.addEventListener('click', async () => {
        window.location.href = '/sign-up';
    })


}
