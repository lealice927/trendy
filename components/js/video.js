
class Video{
    constructor(){
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleError = this.handleError.bind(this);
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
                this.handleSuccess(response);
            },
            error: this.handleError
        }
        $.ajax(ajaxObject);
    }
    handleSuccess(response){
        for(let index = 0; index < response.items.length; index++){
            let {title, description} = response.items[index].snippet;
            let numAndTitle = `# ${index + 1} : ${title}`;
            if(title.length > 40){
                numAndTitle = `# ${index + 1} : ${title.substr(0, 40)}...`;
            }
            const minDescription = `${description.substr(0, 150)}...`;
            const {standard, high} = response.items[index].snippet.thumbnails;
            const link = response.items[index].id;
            const videoImage = standard === undefined ? high : standard;
            const newDiv = this.newElement(videoImage.url, numAndTitle, minDescription, link);
            this.render('#main-content', newDiv);
        }
    }
    handleError(){
        const errorMessage = $('<p>').text('Failed to contact server').addClass('error-message modalContent');
        const errorModal = new Modal(errorMessage);

            //const errorimg = $('<img>').attr({
            //     'src': 'components/css/images/serverdown.png',
            //     'width' : '100%'
            //     });
            // const errorMessage = $('<div>').addClass('error-message');
            // errorMessage.append(errorimg);
            // const errorModal = new Modal(errorMessage);
    }
    newElement(image, title, description, link){
        const imageBox = $('<div>').addClass('image-box').css('background-image', `url(${image})`);
        const titleBox = $('<div>').addClass('title-box').text(title).attr('data-link', `https://www.youtube.com/embed/${link}`).on('click', this.passInVideo);
        const descriptionBox = $('<div>').addClass('description-box').text(description);
        const textBox = $('<div>').addClass('text-box').append(titleBox, descriptionBox);
        const contentBox = $('<div>').addClass('content-box').append(imageBox, textBox);
        return contentBox;
    }
    passInVideo(){
        const link = $(this).attr('data-link');
        const modalVideo = $('<iframe>', {
            class: 'modalContent',
            src: link,
            frameborder: 0,
            allowfullscreen: 'allowfullscreen'
        });
        const videoModal = new Modal(modalVideo);
    }
    render(divContainer, newElement){
        $(divContainer).append(newElement);
    }
}