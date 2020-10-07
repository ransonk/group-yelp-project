
document.addEventListener('DOMContentLoaded', async () => {
    const restaurantId = window.location.href.match(/\/(\d+)$/)[1]
    try {
        const res = await fetch(`/api/restaurants/${restaurantId}`, {
            headers: {
                "WWW-Authenticate": `Bearer ${localStorage.getItem("HANGRY_ACCESS_TOKEN")}`
            }
        });
        const { restaurant } = await res.json();
        console.log(restaurant, 'restaurant');
    } catch(err){
        console.log(err)
    }
    // const restaurant = await fetchRestaurant().json()
    // fetchRestaurant(3)
})