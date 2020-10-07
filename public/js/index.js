//homepage fetch calls

document.addEventListener('DOMContentLoaded', async (e) => {

    const recent = await fetch('/api/restaurants/recent')
    const result = await recent.json();

    const { restaurants } = result;
    const [restaurant1, restaurant2, restaurant3, restaurant4] = restaurants;


    // restaurants.map(({name,foodCategory,city,state,Reviews}) => {
    //     return
    // })

    const restaurant1Name = document.querySelector('.restaurant1__name')
    const restaurant1rating = document.querySelector('.restaurant1__rating')
    const restaurant1foodCategory = document.querySelector('.restaurant1__foodCategory')
    const restaurant1cityState = document.querySelector('.restaurant1__cityState')
    restaurant1Name.innerHTML = restaurant1.name;
    restaurant1rating.innerHTML = restaurant1.Reviews[0].rating;
    restaurant1foodCategory.innerHTML = restaurant1.foodCategory;
    restaurant1cityState.innerHTML = restaurant1.city + ' ' + restaurant1.state
    const restaurant2Name = document.querySelector('.restaurant2__name')
    const restaurant2rating = document.querySelector('.restaurant2__rating')
    const restaurant2foodCategory = document.querySelector('.restaurant2__foodCategory')
    const restaurant2cityState = document.querySelector('.restaurant2__cityState')
    restaurant2Name.innerHTML = restaurant2.name;
    restaurant2rating.innerHTML = restaurant2.Reviews[0].rating;
    restaurant2foodCategory.innerHTML = restaurant2.foodCategory;
    restaurant2cityState.innerHTML = restaurant2.city + ' ' + restaurant2.state
    const restaurant3Name = document.querySelector('.restaurant3__name')
    const restaurant3rating = document.querySelector('.restaurant3__rating')
    const restaurant3foodCategory = document.querySelector('.restaurant3__foodCategory')
    const restaurant3cityState = document.querySelector('.restaurant3__cityState')
    restaurant3Name.innerHTML = restaurant3.name;
    restaurant3rating.innerHTML = restaurant3.Reviews[0].rating;
    restaurant3foodCategory.innerHTML = restaurant3.foodCategory;
    restaurant3cityState.innerHTML = restaurant3.city + ' ' + restaurant3.state
    restaurant2cityState.innerHTML = restaurant2.city + ' ' + restaurant2.state
    const restaurant4Name = document.querySelector('.restaurant4__name')
    const restaurant4rating = document.querySelector('.restaurant4__rating')
    const restaurant4foodCategory = document.querySelector('.restaurant4__foodCategory')
    const restaurant4cityState = document.querySelector('.restaurant4__cityState')
    restaurant4Name.innerHTML = restaurant4.name;
    restaurant4rating.innerHTML = restaurant4.Reviews[0].rating;
    restaurant4foodCategory.innerHTML = restaurant4.foodCategory;
    restaurant4cityState.innerHTML = restaurant4.city + ' ' + restaurant4.state



})
