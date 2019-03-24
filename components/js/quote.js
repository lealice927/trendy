class Quotes{
    constructor(){
    this.pictures = [];
    }
    getDataFromServer(){ 
        for (var index = 1; index <= 10; index++){       //data receiving function
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
    }
    dom(messagePassedIn){        //function returns message from URL
        let descriptionBox = $('<div>').addClass('description-box').append(messagePassedIn);     //creates container for message from URL to be held
        var newPicture = this.randomPicture();
        const txtBox = $('<div>').addClass('image-box').css("background-image", `url(${newPicture})`);  //creates container for message from URL to be held
        const textBox = $('<div>').addClass('text-box')
        var numberCount = $('<div>').addClass('title-box').text(' # Quote');;
        numberCount.append(textBox);
        const contentBox = $('<div>').addClass('content-box').append(txtBox, numberCount, descriptionBox); 

        // function addNumberCount(){
        //     for (i = 1; i<9; i++){
        //         var newNumber = parseInt(i + i++);
        //         return newNumber;
        //     }
        // }
        
        // const numberCount = $('<div>').addClass('title-box').append(addNumberCount);
        return contentBox;  
    }

    randomPicture(result){ 
        var result = ['imagesQuotes/trump1.gif', 'imagesQuotes/trump2.gif', 'imagesQuotes/trump3.gif', 'imagesQuotes/trump4.gif', 'imagesQuotes/trump5.gif', 'imagesQuotes/trump6.gif', 'imagesQuotes/trump7.gif', 'imagesQuotes/trump8.gif', 'imagesQuotes/trump9.gif', 'imagesQuotes/trump10.gif', 'imagesQuotes/trump11.gif', 'imagesQuotes/trump12.gif', ...'imagesQuotes/trump23.gif' ];
        var randomPicture = Math.floor(Math.random()*11);
        return result[randomPicture];           //1 use random number generated to pick index of array of numbers
            }                                   //2 use that to decide which trump img to use
    render(divContainer, newElement){           //3 then use that to slice the number out of array so never get picked again
        $(divContainer).append(newElement);     //4 decrement the range in random number generator 
    }                                           //5 keep repeat 
}
