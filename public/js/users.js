
document.addEventListener('DOMContentLoaded', async () => {

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
    const reviewsArray = reviews.map(({ rating, description, createdAt, Restaurant })=> {
        const reviewDiv = document.createElement('div');
        reviewDiv.setAttribute('class', 'profile__review-div');
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