//homepage fetch calls

document.addEventListener('DOMContentLoaded', async (e) => {


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
        document.querySelector('#demo-user').classList.add('hidden')

    } else if (loggedInStatus.result === "Business Owner Token") {
        document.querySelector('#sign-up').classList.add('hidden')
        document.querySelector('#log-in').classList.add('hidden')
        document.querySelector('#profile').classList.remove('hidden')
        document.querySelector('#log-out').classList.remove('hidden')
        document.querySelector('#my-business').classList.remove('hidden')
        document.querySelector('#demo-user').classList.add('hidden')

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


    //search event listner
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(searchForm)
        const search = formData.get("search")
        localStorage.setItem("searchValue", search)
        window.location.href = `/search`
    })


    const dropDown = document.querySelector(".dropdown-list");
    dropDown.addEventListener("input", async (e) => {
        const value = e.target.value;
        if (localStorage.getItem("searchValue")) {
            localStorage.removeItem("searchValue");
        }
        localStorage.setItem("foodCategory", value);
        window.location.href = `/search`;
    })

    const servicesSearchBtns = document.querySelectorAll('.services-search');
    servicesSearchBtns.forEach((searchButton) => {
        searchButton.addEventListener('click', (e) => {
            // e.preventDefault();
            let value = e.target.value;
            localStorage.setItem('services', value)
            window.location.href = '/search';
        })

    })


    const recent = await fetch('/api/restaurants/recent')
    const result = await recent.json();

    const { restaurants } = result;
    // const [restaurant1, restaurant2, restaurant3, restaurant4] = restaurants;

    // iterating through recent restaurant array
    restaurants.forEach((restaurant, i) => {
        // interpolationg index to make a valid queryselector class
        const restaurantName = document.querySelector(`.restaurant${i + 1}__name`)
        const restaurantRating = document.querySelector(`.restaurant${i + 1}__rating`)
        const restaurantFoodCategory = document.querySelector(`.restaurant${i + 1}__foodCategory`)
        const restaurantCityState = document.querySelector(`.restaurant${i + 1}__cityState`)
        // calculating average rating
        let averageRating = restaurant.Reviews.reduce((total, review) => {
            total += review.rating;
            // return Math.round(total / restaurant.Reviews.length);
            return total
            
        }, 0)
        averageRating = Math.round(averageRating / restaurant.Reviews.length)


        // checking if the restaurant has reviews if it is not returning with 'No reviews yet' text
        if (averageRating === 0) {
            restaurantRating.innerHTML = "No reviews yet";
        } else {
            restaurantRating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(averageRating)}</span>`
        }
        // setting innerhtml for restaurant
        restaurantName.href = `/restaurants/${restaurant.id}`
        restaurantFoodCategory.innerHTML = restaurant.foodCategory;
        restaurantCityState.innerHTML = restaurant.city + ' ' + restaurant.state;
        restaurantName.innerHTML = restaurant.name;
    });

})
