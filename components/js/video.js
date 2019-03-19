$(document).ready(initApp);

let youtube = null;

function initApp(){
    youtube = new Video();
}

class Video{
    constructor(){
        this.getDataFromServer();
    }
    getDataFromServer(){
        const ajaxObject = {
            dataType: 'json',
            // url: 'https://www.googleapis.com/youtube/v3/videos',
            url: 'https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet%2CcontentDetails',
            method: 'GET',
            data: {
                // part: 'id%2Csnippet%2CcontentDetails',
                maxResults: 10,
                chart: 'mostPopular',
                regionCode: 'US',
                key: 'AIzaSyDlkgVNYAnyQj3e4gZipF7DwyYBFjLtSZU'
            },
            success: function(response){
                console.log(response);
                for(let index = 0; index < response.items.length; index++){
                    let title = `${index + 1}. ${response.items[index].snippet.title}`;
                    let description = response.items[index].snippet.description;
                    // let imageLG = response.items[index].snippet.thumbnails.maxres.url;
                    let imageMD = response.items[index].snippet.thumbnails.standard.url;
                    let link = response.items[index].id;
                    // let imageSM = response.items[index].snippet.thumbnails.medium.url;
                    const newDiv = youtube.newElement(imageMD, title, description, link);
                    youtube.render('#main-content', newDiv);
                }
            },
            error: function(){
                alert('Failed to contact server');
            }
        }
        $.ajax(ajaxObject);
    }
    newElement(image, title, description, link){
        const imageBox = $('<div>').addClass('image-box').css('background-image', `url(${image})`);
        const videoLink = $('<a>').attr('href', `https://www.youtube.com/watch?v=${link}`).text(title);
        const titleBox = $('<div>').addClass('title-box').append(videoLink);
        const descriptionBox = $('<div>').addClass('description-box').text(description);
        const textBox = $('<div>').addClass('text-box').append(titleBox, descriptionBox);
        const contentBox = $('<div>').addClass('content-box').append(imageBox, textBox);
        return contentBox;
    }
    render(divContainer, newElement){
        $(divContainer).append(newElement);
    }
}