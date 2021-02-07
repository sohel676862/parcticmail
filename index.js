// fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => getallinformation(data))


// const getallinformation = countrydetailes => {
//     const countrydiv = document.getElementById('container')
//     let option = ""
//     countrydetailes.forEach(countryabout => {

// const div = document.createElement("div");
// const divinfo = `
//  <h3> ${countryabout.name}</h3>
//     <p>${countryabout.capital}</p>            
//  `
// div.innerHTML = divinfo;
// countrydiv.appendChild(div)
// option += ` <option value="a">${countryabout.name}</option>`


//     })
//     document.getElementById('load').innerHTML = option
// }

const foodbtn = document.getElementById('foodbtn')
foodbtn.addEventListener('click', foodlist);

///get meal list
function foodlist() {
    let serarInput = document.getElementById('serarInput').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${serarInput}`)
        .then(res => res.json())
        .then(data => getallfood(data))
}

const getallfood = foodname => {
    const foodnameload = document.getElementById('meal')
    if (foodname.meals) {
        foodname.meals.forEach(meal => {
            const div = document.createElement('div')
            const foodinfo = `
         <div class="meal_item">
                        <div class="meal_img">
                            <img src="${meal.strMealThumb}" alt="">
                        </div>
                        <div class="meal_name">
                            <h3>${meal.strMeal}</h3>
                        </div>

                    </div> 

        `
            div.innerHTML = foodinfo
            foodnameload.appendChild(div)

        });
    } else {
        const h3 = `  <h3>sorry </h3>`
        const div = document.createElement('div')
        div.innerHTML = h3
        foodnameload.appendChild(div)

    }
}


// fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
//     .then(res => res.json())
//     .then(data => getallfood(data))

// const getallfood = foodname => {
//     console.log(foodname.meals)
// }