$(document).ready(startApp);



function startApp(){

    let food = new Food();
    // food.getDataFromServer();
    food.generateSearchData(); 
    food.getCurrentLocation();
}