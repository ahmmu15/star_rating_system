// initial rating
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 4.1
}

// total stars
const starsTotal = 5

//run getRating fun on dom load
document.addEventListener('DOMContentLoaded', getRatings)

// form elements
const productSelect = document.getElementById('product-select')
const ratingControl = document.getElementById('rating-control')

// init product
let product

// product select change event
productSelect.addEventListener('change', (e) => {
    product = e.target.value

    //enable rating control
    ratingControl.disabled = false

    // set the rate field value to existed product val
    ratingControl.value = ratings[product]
})

// let user edit/update rating (aka. rate the product)
ratingControl.addEventListener('keyup', (e) => {
    const rating = e.target.value

    // make sure 5 or under
    if(rating > 5) {
        alert('Please rate 1-5')
        return // so nothing will happen
    }

    // submit the value when user press Enter key
    if(e.keyCode == 13) {

        // change the rating
        ratings[product] = rating
    
        // to update we have to re run getRatings fun
        getRatings()
    }
})

// loop through obeject => for in loop [for of loop =>is for arrays]
// get ratings fun
function getRatings() {
    for(let rating in ratings) {
        // get precentage
        const starPrecentage = (ratings[rating] / starsTotal) * 100 //formula to convert to precentage
        
        // round to nearest 10
        const starPrecentageRounded = `${Math.round(starPrecentage) / 10 * 10}%`

        // set width of stars inner to percentage
        // we can select dynamic class as following
        document.querySelector(`.${rating} .stars-inner`).style.width = starPrecentageRounded

        // add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating]
    }
}