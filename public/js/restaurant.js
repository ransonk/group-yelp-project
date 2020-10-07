const fetchRestaurant = async (restaurantId) => {
    const res = await fetch(`/api/restaurants/${restaurantId}`, {
        headers: {
            "WWW-Authenticate": `Bearer ${localStorage.getItem("HANGRY_ACCESS_TOKEN")}`
        }
    });
    const { restaurant } = await res.json();
}
