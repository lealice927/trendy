$(document).ready(startApp);

let trendy;

function startApp(){
    trendy = new Trendy();
    trendy.addEventListener();
    trendy.generateHomePage();
}
