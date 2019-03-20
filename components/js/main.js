$(document).ready(startApp);



function startApp(){

    let food = new Food();
    food.generateSearchData(); 
    food.getCurrentLocation();
    food.addEventListener();
}