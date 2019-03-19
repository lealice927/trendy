class Food{
    constructor( ){
        this.latitude = null;
        this.longitude = null;
        this.ajaxObj = null;
        this.getCurrentLocation = this.getCurrentLocation.bind(this);
        this.savePosition = this.savePosition.bind(this);
        this.generateSearchData = this.generateSearchData.bind(this);
    }
    generateSearchData(){
        const ajaxObj = {
            "async": true,
            "crossDomain": true,
            "url": "components/api/yelpproxy.php",
            data: {
                term: 'dessert',
                attribute: 'hot_and_new',
                sort_by: 'rating'  
            },
            "method": "GET",
            "headers": {
              "apikey": "LYh8aLnK3aKVWOQycd5DzPTTrzZg1JY_DYYxs_2YPhIKd9ZpJfE8qR0TRS6nTfzUbGp5Rc5PgnwuBotVWQsyH1BNTr-m4KQxpgEqPPnBgQoV1tT17HTU1Rvu2zWQXHYx",
              "cache-control": "no-cache",
            },
            dataType: 'json',
            success: this.dealData,
            error: this.handleError
        };
        if(this.latitude && this.longitude){
            ajaxObj.data.latitude = this.latitude;
            ajaxObj.data.longitude = this.longitude;
        } else {
            ajaxObj.data.location = 'orange county';
        }
        this.getDataFromServer(ajaxObj);
    }
    getDataFromServer(ajaxObj){
        $.ajax(ajaxObj);
    }
    dealData(response){
        console.log(response);
        const business = response.businesses;
        for(let i=0; i < business.length; i++){
            const imgurl = `url('${business[i]['image_url']}')`;
            const name = $('<p>').text(business[i].name);
            const businessId = business[i].alias
            const rate = business[i].rating;
            const review_count = business[i].categories[0].title;
            const address = $('<p>').text(business[i].location['display_address'].join(','));
            const description = $('<p>').html(`Rating: ${rate} <br> Category: ${review_count} <br>`);
            const titleBox = $('<div>').addClass('title-box');
            const descriptionBox = $('<div>').addClass('description-box');
            const imgBox = $('<div>').addClass('image-box').css('background-image', imgurl);
            const textBox = $('<div>').addClass('text-box');
            const contentBox = $('<div>').addClass('content-box');
            const mainContent = $('#main-content');
            const link = $('<a>').attr('href', `https://www.yelp.com/biz/${businessId}`);
            titleBox.append(name);
            link.append(titleBox);
            descriptionBox.append(description, address);
            textBox.append(link, descriptionBox);

            contentBox.append(imgBox, textBox);
            mainContent.append(contentBox);

        }
        
    }
    handleError(error){
        console.log(error.statusText);
    } 
    getCurrentLocation(){
        navigator.geolocation.getCurrentPosition(this.savePosition);
    }
    savePosition(pos){
            const crd = pos.coords;
            this.latitude = crd.latitude.toString();
            this.longitude = crd.longitude.toString();
            console.log('Current location: ',this.latitude, this.longitude);
    }     
}