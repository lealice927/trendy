$(document).ready(initializeApp);

var startQuotes = null;
function initializeApp(){
    startQuotes = new Quotes(); 
    startQuotes.differentResult();
}


class Quotes{
    constructor(){
    this.pictures = [];
    }
    differentResult(){
        for (var index = 0; index < 4; index++){
        this.getDataFromServer();  
      }
    }
    getDataFromServer(){        //data receiving function
        const ajaxObject = {        //ajax result container
            dataType: 'json',       
            url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
            method: 'GET',
            success: (response)=>{
                    let message = response.message;       //extract message from object
                    let quotedMessage = '"' + message + '"';
                    const newTxtDiv = startQuotes.dom(quotedMessage);      //inputting message from txtDom into startQuotes object 
                    startQuotes.render("#main-content", newTxtDiv);      //targeting description-box and put message content into render to DOM
                
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

    randomPicture(result){
        var result = null;
        for (pictures = 0; pictures < this.pictures.length; pictures++){
            if (Math.floor(Math.random(result) * 9)){
                return result;
            }
        }
    }
    render(divContainer, newElement){
        $(divContainer).append(newElement);
    }
}
