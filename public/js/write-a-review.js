

document.addEventListener('DOMContentLoaded', async () => {
    const userId = localStorage.getItem('HANGRY_CURRENT_USER_ID');
    const token = localStorage.getItem('HANGRY_ACCESS_TOKEN');
    const writeReviewButton = document.querySelector('.write-review__submit-button');
    const writeReviewForm = document.querySelector('.write-review__form');
    const restaurantId = window.location.href.match(/\/(\d+)\//)[1];
    console.log(restaurantId);
    writeReviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(writeReviewForm);
        const rating = await formData.get('rating');
        const description = await formData.get('description');

        try {
            const res = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ rating, description, userId })
            })
            if (!res.ok) {
                throw res;
            } else {
                window.location.href = `/restaurants/${restaurantId}`;
            }
        }
        catch (err) {
            console.log(err);
        }

    })


})
