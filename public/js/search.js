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
        console.log(query)
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

}

document.addEventListener('DOMContentLoaded', async () => {
    const restaurantsContainer = document.querySelector('.search__restaurants-container');
    if (localStorage.getItem("searchValue")) {
        const localResult = await fetchRestaurants(localStorage.getItem("searchValue"))
        searchRender(localResult);
    }

    if (localStorage.getItem("foodCategory")) {
        const localResult = await fetchRestaurants(localStorage.getItem("foodCategory").value)
        console.log("LCOALRESULT: ", localResult);
        searchRender(localResult);
    }


    if (localStorage.getItem("services")) {
        const localResult = await fetchRestaurants(localStorage.getItem("services"))
        console.log(localResult);
        searchRender(localResult);
    }



    const search = document.querySelector('.search')
    search.addEventListener('submit', async (e) => {
        e.preventDefault();
        restaurantsContainer.innerHTML = '';
        const formData = new FormData(search);
        const input = formData.get('search')
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
            }
            let imgUrl;
            if (!Images.length) {
                imgUrl = '';
            } else {
                imgUrl = Images[0].url;
            }
            return `
                    <a href="/restaurants/${id}">
                        <div class='search__res-div'>
                            <input type="hidden" value="${id}" class="search__restaurant-id">
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
