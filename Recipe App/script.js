const meals =document.getElementById('meals');










//asysnc make the function return promise
//await before a function makes the function wait for a promise
getRandomMeal();
async function getRandomMeal(){
    const randomMeal_fetched = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const respData = await randomMeal_fetched.json();
    const randomMeal = respData.meals[0];
    console.log(randomMeal);

    addMeal(randomMeal, true);
}

async function getMealBySearch(id){
    const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
}

async function getMealsBySearch(term){
    const meal = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}

function addMeal(mealData, random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
                <div class="meal-header">
                    ${random ? `
                    <span class="random">Randome Recipe</span>` 
                : ``};
                    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
                </div>
                <div class="meal-body">
                    <h4>${mealData.strMeal}</h4>
                    <button class="icons">
                        <i class="far fa-heart fav-btn"></i>
                        <i class="far fa-comment"></i>
                        <i class="far fa-share-square"></i>
                    </button>
                </div>
            `;

            const btn = meal.querySelector(".meal-body .fav-btn");
            btn.addEventListener("click",
            (e)=>{
                e.target.classList.toggle("active");
            });

            meals.appendChild(meal);
}























