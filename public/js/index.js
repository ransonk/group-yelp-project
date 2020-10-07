//homepage fetch calls

document.addEventListener('DOMContentLoaded', async (e) => {

    const recent = await fetch('/api/restaurants/recent')
    const result = await recent.json();
    console.log(result);

    const { restaurants } = result;
    const [restaurant1, restaurant2, restaurant3] = restaurants;
    console.log(restaurant1);
    console.log(restaurant2);
    console.log(restaurant3);
    // const {Images, Reviews, city, state, foodCategory, name} = restaurant1;

    // const firstRec = document.getElementsByClassName('restaurant1');
    // firstRec.innerHTML = restaurant1.name
})
