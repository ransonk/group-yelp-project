
document.addEventListener('DOMContentLoaded', async () => {

    const token = localStorage.getItem("HANGRY_ACCESS_TOKEN")
    const id = localStorage.getItem("HANGRY_CURRENT_USER_ID")
    console.log(id)
    const body = { token, id }
    const res2 = await fetch("/api/user/check", {
        method: "POST",
        body: JSON.stringify(body),
        headers:
            { "Content-Type": "application/json" },
    })

    const loggedInStatus = await res2.json();

    document.querySelector('#my-business').addEventListener('click', async (e) => {
        const res = await fetch(`/api/restaurants/user/${id}/restaurant`);
        const { restaurant } = await res.json();
        // console.log(restaurant.id)
        const restaurantId = restaurant.id;
        window.location.href = `/restaurants/${restaurantId}`;
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

    const usernameDiv = document.querySelector('.profile__user-name');
    const userPictureDiv = document.querySelector('.profile__user-pic');
    const reviewsContainer = document.querySelector('.profile__reviews-container');

    const userId = window.location.href.match(/\/(\d+)$/)[1]
    // console.log(userId)
    const res = await fetch(`/api/user/${userId}`);
    const { user: { firstName, lastName, profileUrl }, reviews } = await res.json();
    console.log(reviews);

    usernameDiv.innerHTML = firstName + ' ' + lastName;
    userPictureDiv.innerHTML = `<img src="${profileUrl}">`
    const reviewsArray = reviews.map(({ rating, description, createdAt, Restaurant }) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.setAttribute('class', 'profile__review-div');
        if (rating === 0) {
            rating = "No reviews yet";
        } else if (rating === 1) {
            rating = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(1)}</span>`
        } else if (rating === 2) {
            rating = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(2)}</span>`
        } else if (rating === 3) {
            rating = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(3)}</span>`
        } else if (rating === 4) {
            rating = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(4)}</span>`
        } else if (rating === 5) {
            rating = `<span style='color:gold;'>${'<i class="fas fa-star"></i>'.repeat(5)}</span>`
        }

        return reviewDiv.innerHTML = `

            <div class="profile__review-restaurant">
                <a href="/restaurants/${Restaurant.id}">
                <h3>${Restaurant.name}</h3>
                </a>
            </div>
            <div class="profile__review-rating">
                <p>${rating} ${new Date(createdAt).toLocaleString()}</p>
            </div>
            <div class="profile__review-description">
                <p>${description}</p>
            </div>
        `
    })
    const reviewsHTML = reviewsArray.join('');
    reviewsContainer.innerHTML += reviewsHTML;


})
