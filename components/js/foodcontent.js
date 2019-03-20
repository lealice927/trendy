class Content{
    constructor(info, callback){
        this.business = info;
        this.contentBox = {};
        this.callback = callback;
        this.handleClick= this.handleClick.bind(this);
    }
    makeNewContent(i){
        const {image_url,name, alias, rating, location} = this.business;
        const category = this.business.categories[0].title;
        const businessName = $('<p>').text(`# ${i+1} : ${name}`);
        const address = $('<p>').text(location.display_address.join(','));
        const addressLink = $('<a>').attr('href', `https://www.google.com/maps/place/${location.display_address.join('+')}`)
        const description = $('<p>').html(`Rating: ${rating} <br> Category: ${category} <br>`);
        const titleBox = $('<div>').addClass('title-box');
        const descriptionBox = $('<div>').addClass('description-box');
        const imgBox = $('<div>').addClass('image-box').css('background-image', `url('${image_url}')`);
        const textBox = $('<div>').addClass('text-box');
        const link = $('<a>').attr('href', `https://www.yelp.com/biz/${alias}`);
        const contentBox = $('<div>').addClass('content-box');

        addressLink.append(address);
        titleBox.append(businessName);
        link.append(titleBox);
        descriptionBox.append(description, addressLink);
        textBox.append(link, descriptionBox);
        contentBox.append(imgBox, textBox);

        this.contentBox.imgBox = imgBox;
        this.contentBox.imgBox.url = image_url;
        this.contentBox.imgBox.on('click', this.handleClick);
        return contentBox;
    }
    handleClick(){
        this.callback(this);
    }
}