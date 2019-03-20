class Food{
    constructor( ){
        this.latitude = null;
        this.longitude = null;
        this.ajaxObj = null;
        
        this.getCurrentLocation = this.getCurrentLocation.bind(this);
        this.savePosition = this.savePosition.bind(this);
        this.generateSearchData = this.generateSearchData.bind(this);
        this.dealData = this.dealData.bind(this);
        this.addEventListener = this.addEventListener.bind(this);
        this.popUpImg = this.popUpImg.bind(this);
        
    }
    addEventListener(){
        $('.close').on('click', this.closeModal);
    }
    closeModal(){
        $('.modal').css('display','none');
    }
    popUpImg(content){
        const imageUrl = `url('${content.contentBox.imgBox.url}')`;
        // const modal = $('<div>').addClass('modal');
        const picture = $('<div>').attr('id', 'picture');
        // debugger;
        // const close = $('<span>').addClass('close');
        // close.html('&times;');
        // picture.append(close);
        // modal.append(picture);
        // modal.css('display','block');
        picture.css('background-image', imageUrl);
        // this.render(modal);
        // this.addEventListener();
        const modal = new Modal(picture);
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
        debugger;
        console.log(response);
        const business = response.businesses;
        for(let i=0; i < business.length; i++){
            const newContent = new Content(business[i], this.popUpImg);
            this.render(newContent.makeNewContent(i));
        }   
    }
    render(content){
        const mainContent = $('#main-content');
        mainContent.append(content);
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

