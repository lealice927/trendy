
class Video{
    constructor(){
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleError = this.handleError.bind(this);
        this.addMoreResults = this.addMoreResults.bind(this);
        this.pageToken = null;
        this.index = 0;
    }
    getDataFromServer(pageToken){
        const ajaxObject = {
            dataType: 'json',
            url: 'https://www.googleapis.com/youtube/v3/videos',
            method: 'GET',
            data: {
                part: 'id, snippet, contentDetails',
                maxResults: 10,
                chart: 'mostPopular',
                regionCode: 'US',
                key: 'AIzaSyDlkgVNYAnyQj3e4gZipF7DwyYBFjLtSZU',
                pageToken: pageToken
            },
            success: (response)=>{
                this.handleSuccess(response);
            },
            error: this.handleError
        }
        $.ajax(ajaxObject);
    }
    handleSuccess(response){
        this.pageToken = response.nextPageToken;
        for(let itemIndex = 0; itemIndex < response.items.length; this.index++, itemIndex++){
            let {title, description} = response.items[itemIndex].snippet;
            const numAndTitle = title.length > 40 ? `# ${this.index + 1} : ${title.substr(0, 40)}...` : `# ${this.index + 1} : ${title}`;
            const minDescription = description.length > 150 ? `# ${this.index + 1} : ${description.substr(0, 150)}...` : `# ${this.index + 1} : ${description}`;
            const {standard, high} = response.items[itemIndex].snippet.thumbnails;
            const link = response.items[itemIndex].id;
            const videoImage = standard === undefined ? high : standard;
            const newDiv = this.newElement(videoImage.url, numAndTitle, minDescription, link);
            this.render('#main-content', newDiv);
        }
    }
    handleError(){
        const errorimg = $('<img>').attr({
            'src': 'components/css/images/serverdown.png',
            'width' : '100%'
            });
        const errorMessage = $('<div>').addClass('error-message');
        errorMessage.append(errorimg);
        const errorModal = new Modal(errorMessage);
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
    addMoreResults(){
        this.getDataFromServer(this.pageToken);
    }
    addMoreResultsButton(){
        const addButton = $('<button>').addClass('add-button').text('Next 10').on('click', this.addMoreResults);
        this.render('#main-content', addButton);
    }
}