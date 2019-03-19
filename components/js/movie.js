$(document).ready(initializeApp);

var startQuotes = null;
function initializeApp(){
    startQuotes = new Quotes(); 
}


class Quotes{
    constructor(){
        this.getDataFromServer();       //static function inside constructor to trigger main data receiving function
    }
    getDataFromServer(){        //data receiving function
        const ajaxObject = {        //ajax result container
            dataType: 'json',       
            url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
            method: 'GET',
            success: (response)=>{
                for (let index = 0; index<10; index++){     //creates for loop for automatic div creation
                    const message = response.message;       //extract message from object
                    const newTxtDiv = startQuotes.dom(message);      //inputting message from txtDom into startQuotes object 
                    startQuotes.render("#main-content", newTxtDiv);      //targeting description-box and put message content into render to DOM
                }
                
            },
            error: ()=>alert('Failed to contact server')
        }
        $.ajax(ajaxObject);
    }
        dom(messagePassedIn){        //function returns message from URL
            const descriptionBox = $('<div>').addClass('quoteBox').append(messagePassedIn);     //creates container for message from URL to be held
            const txtBox = $('<div>').addClass('textBox').append(descriptionBox);  //creates container for message from URL to be held
            const contentBox = $('<div>').addClass('contentBox').append(txtBox); 
            return contentBox;  
        }
        render(divContainer, newElement){
            $(divContainer).append(newElement);
        
    }
}