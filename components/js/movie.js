// $(document).ready(initializeApp);

// var startQuotes = null;
// function initializeApp(){
//     startQuotes = new Quotes(); 
//     startQuotes.differentResult();
// }


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
                    const newTxtDiv = this.dom(quotedMessage);      //inputting message from txtDom into startQuotes object 
                    this.render("#main-content", newTxtDiv);      //targeting description-box and put message content into render to DOM
                
            },
            error: ()=>alert('Failed to contact server')
        }
        $.ajax(ajaxObject);
    }
    dom(messagePassedIn){        //function returns message from URL
        const descriptionBox = $('<div>').addClass('quoteBox').append(messagePassedIn);     //creates container for message from URL to be held
        var newPicture = this.randomPicture();
        const txtBox = $('<div>').addClass('textBox').css("background-image", `url(${newPicture})` ).append(descriptionBox);  //creates container for message from URL to be held
        const contentBox = $('<div>').addClass('contentBox').append(txtBox); 
        return contentBox;  
    }

    randomPicture(result){
        var result = ['imagesQuotes/trump1.gif', 'imagesQuotes/trump2.gif', 'imagesQuotes/trump3.gif', 'imagesQuotes/trump4.gif', 'imagesQuotes/trump5.gif', 'imagesQuotes/trump6.gif', 'imagesQuotes/trump7.gif', 'imagesQuotes/trump8.gif', 'imagesQuotes/trump9.gif', 'imagesQuotes/trump10.gif', 'imagesQuotes/trump11.gif', 'imagesQuotes/trump12.gif'];
        var randomPicture = Math.floor(Math.random()*11);
            console.log(result[randomPicture]);  
        return result[randomPicture];
            }
    render(divContainer, newElement){
        $(divContainer).append(newElement);
    }
}
