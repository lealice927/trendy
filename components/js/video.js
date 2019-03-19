$(document).ready(()=> youtube = new Video());

class Video{
    constructor(){
        this.getDataFromServer();
    }
    getDataFromServer(){
        const ajaxObject = {
            dataType: 'json',
            url: 'https://www.googleapis.com/youtube/v3/videos',
            method: 'GET',
            data: {
                part: 'id, snippet, contentDetails',
                maxResults: 10,
                chart: 'mostPopular',
                regionCode: 'US',
                key: 'AIzaSyDlkgVNYAnyQj3e4gZipF7DwyYBFjLtSZU'
            },
            success: (response)=>{
                for(let index = 0; index < response.items.length; index++){
                    let {title, description} = response.items[index].snippet;
                    const numAndTitle = `${index + 1}. ${title.substr(0, 40)}`;
                    const minDescription = `${description.substr(0, 150)}...`;
                    const {maxres, standard, medium} = response.items[index].snippet.thumbnails;
                    const link = response.items[index].id;
                    const newDiv = youtube.newElement(standard.url, numAndTitle, minDescription, link);
                    youtube.render('#main-content', newDiv);
                }
            },
            error: ()=>alert('Failed to contact server')
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