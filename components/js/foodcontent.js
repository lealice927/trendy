class FoodContent{
    constructor(info, callback){
        this.business = info;
        this.contentBox = {};
        this.callback = {
            img: callback.img,
            yelp: callback.yelp
        }
        this.imgClick= this.imgClick.bind(this);
        this.titleClick= this.titleClick.bind(this);
    }
    makeNewContent(i){
        const {image_url,name, alias, rating, location} = this.business;
        const category = this.business.categories[0].title;
        const businessName = $('<p>').text(`# ${i+1} : ${name}`);
        const address = $('<p>').text(location.display_address.join(','));
        const description = $('<p>').html(`Rating: ${rating} <br>${category} <br>`);
        const titleBox = $('<div>').addClass('title-box');
        const descriptionBox = $('<div>').addClass('description-box');
        const imgBox = $('<div>').addClass('image-box imghover').css('background-image', `url('${image_url}')`);
        const textBox = $('<div>').addClass('text-box');
        const yelpLink = `https://www.yelp.com/biz/${alias}`;
        const contentBox = $('<div>').addClass('content-box');
      
        titleBox.append(businessName);
        descriptionBox.append(description, address);
        textBox.append(titleBox, descriptionBox);
        contentBox.append(imgBox, textBox);

        this.contentBox.imgBox = imgBox;
        this.contentBox.imgBox.url = image_url;
        this.contentBox.imgBox.on('click', this.imgClick);
        this.contentBox.title = titleBox;
        this.contentBox.title.url = yelpLink;
        this.contentBox.title.on('click', this.titleClick);
        return contentBox;
    }
    imgClick(){
        this.callback.img(this);
    }
    titleClick(){
        this.callback.yelp(this);
    }
}