$(document).ready(startApp);

let trendy;
var div= null;

function startApp(){
    trendy = new Trendy();
    trendy.addEventListener();
    trendy.generateHomePage();
}

function omg(){
    debugger;
    trendy = new Trendy();
    if(div === 'Foods'){
        trendy.generateFoodPage();
    } else if (div === 'Music'){
        trendy.generateMusicPage();
    } else if (div === 'Quotes'){
        trendy.generateQuotePage();
    } else if (div === 'Videos'){
        trendy.generateVideoPage();
    }
}