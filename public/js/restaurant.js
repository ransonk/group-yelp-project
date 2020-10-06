const fetchRestaurants = () => {
    return async () => {
        const res = await fetch('/api/restaurants');
        const restaurants = res.json();
    }
}

const fetchRestaurant = (restaurantId) => {
    return async () => {

    }
}