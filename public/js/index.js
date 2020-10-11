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
        const averageRating = restaurant.Reviews.reduce((total, review) => {
            total += review.rating;
            return Math.round(total / restaurant.Reviews.length);
        }, 0)
        // checking if the restaurant has reviews if it is not returning with 'No reviews yet' text
        if (averageRating === 0) {
            restaurantRating.innerHTML = "No reviews yet";
        } else if (averageRating === 1) {
            restaurantRating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(1)}</span>`
        } else if (averageRating === 2) {
            restaurantRating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(2)}</span>`
        } else if (averageRating === 3) {
            restaurantRating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(3)}</span>`
        } else if (averageRating === 4) {
            restaurantRating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(4)}</span>`
        } else if (averageRating === 5) {
            restaurantRating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(5)}</span>`
        }
        // setting innerhtml for restaurant
        restaurantName.href = `/restaurants/${restaurant.id}`
        restaurantFoodCategory.innerHTML = restaurant.foodCategory;
        restaurantCityState.innerHTML = restaurant.city + ' ' + restaurant.state;
        restaurantName.innerHTML = restaurant.name;
    });

    // const restaurant1Name = document.querySelector('.restaurant1__name')
    // const restaurant1rating = document.querySelector('.restaurant1__rating')
    // const restaurant1foodCategory = document.querySelector('.restaurant1__foodCategory')
    // const restaurant1cityState = document.querySelector('.restaurant1__cityState')
    // restaurant1Name.innerHTML = restaurant1.name;

    // restaurant1Name.href = `/restaurants/${restaurant1.id}`
    // if (restaurant1.Reviews[0].rating === 1) {
    //     restaurant1rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(1)}</span>`
    // } else if (restaurant1.Reviews[0].rating === 2) {
    //     restaurant1rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(2)}</span>`
    // } else if (restaurant1.Reviews[0].rating === 3) {
    //     restaurant1rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(3)}</span>`
    // } else if (restaurant1.Reviews[0].rating === 4) {
    //     restaurant1rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(4)}</span>`
    // } else if (restaurant1.Reviews[0].rating === 5) {
    //     restaurant1rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(5)}</span>`
    // }
    // else {

    //     restaurant1rating.innerHTML = "No reviews yet";
    // }
    // restaurant1foodCategory.innerHTML = restaurant1.foodCategory;
    // restaurant1cityState.innerHTML = restaurant1.city + ' ' + restaurant1.state

    // const restaurant2Name = document.querySelector('.restaurant2__name')
    // const restaurant2rating = document.querySelector('.restaurant2__rating')
    // const restaurant2foodCategory = document.querySelector('.restaurant2__foodCategory')
    // const restaurant2cityState = document.querySelector('.restaurant2__cityState')
    // restaurant2Name.innerHTML = restaurant2.name;

    // restaurant2Name.href = `/restaurants/${restaurant2.id}`
    // if (restaurant2.Reviews[0].rating === 1) {
    //     restaurant2rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(1)}</span>`
    // } else if (restaurant2.Reviews[0].rating === 2) {
    //     restaurant2rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(2)}</span>`
    // } else if (restaurant2.Reviews[0].rating === 3) {
    //     restaurant2rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(3)}</span>`
    // } else if (restaurant2.Reviews[0].rating === 4) {
    //     restaurant2rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(4)}</span>`
    // } else if (restaurant2.Reviews[0].rating === 5) {
    //     restaurant2rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(5)}</span>`
    // }
    // else {

    //     restaurant2rating.innerHTML = "No reviews yet";
    // }
    // restaurant2foodCategory.innerHTML = restaurant2.foodCategory;
    // restaurant2cityState.innerHTML = restaurant2.city + ' ' + restaurant2.state
    // const restaurant3Name = document.querySelector('.restaurant3__name')
    // const restaurant3rating = document.querySelector('.restaurant3__rating')
    // const restaurant3foodCategory = document.querySelector('.restaurant3__foodCategory')
    // const restaurant3cityState = document.querySelector('.restaurant3__cityState')
    // restaurant3Name.innerHTML = restaurant3.name;

    // restaurant3Name.href = `/restaurants/${restaurant3.id}`
    // // console.log('rating', restaurant3.Reviews[0].rating)
    // if (restaurant3.Reviews[0].rating === 1) {
    //     restaurant3rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(1)}</span>`
    // } else if (restaurant3.Reviews[0].rating === 2) {
    //     restaurant3rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(2)}</span>`
    // } else if (restaurant3.Reviews[0].rating === 3) {
    //     restaurant3rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(3)}</span>`
    // } else if (restaurant3.Reviews[0].rating === 4) {
    //     restaurant3rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(4)}</span>`
    // } else if (restaurant3.Reviews[0].rating === 5) {
    //     restaurant3rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(5)}</span>`
    // }
    // else {

    //     restaurant3rating.innerHTML = "No reviews yet";
    // }
    // restaurant3foodCategory.innerHTML = restaurant3.foodCategory;
    // restaurant3cityState.innerHTML = restaurant3.city + ' ' + restaurant3.state
    // restaurant2cityState.innerHTML = restaurant2.city + ' ' + restaurant2.state
    // const restaurant4Name = document.querySelector('.restaurant4__name')
    // const restaurant4rating = document.querySelector('.restaurant4__rating')
    // const restaurant4foodCategory = document.querySelector('.restaurant4__foodCategory')
    // const restaurant4cityState = document.querySelector('.restaurant4__cityState')
    // restaurant4Name.innerHTML = restaurant4.name;

    // restaurant4Name.href = `/restaurants/${restaurant4.id}`
    // if (restaurant4.Reviews[0].rating === 1) {
    //     restaurant4rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(1)}</span>`
    //     // restaurant3rating.innerHTML = restaurant3.Reviews[0].rating;
    // } else if (restaurant4.Reviews[0].rating === 2) {
    //     restaurant4rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(2)}</span>`
    // } else if (restaurant4.Reviews[0].rating === 3) {
    //     restaurant4rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(3)}</span>`
    // } else if (restaurant4.Reviews[0].rating === 4) {
    //     restaurant4rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(4)}</span>`
    // } else if (restaurant4.Reviews[0].rating === 5) {
    //     restaurant4rating.innerHTML = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(5)}</span>`
    // }
    // else {

    //     restaurant4rating.innerHTML = "No reviews yet";
    // }
    // restaurant4foodCategory.innerHTML = restaurant4.foodCategory;
    // restaurant4cityState.innerHTML = restaurant4.city + ' ' + restaurant4.state
})
