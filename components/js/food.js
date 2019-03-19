class Food{
    constructor(ajaxobj, ){
        this.attribute = 'hot_and_new';
        this.latitude = null;
        this.longitude = null;
        this.location = 'irvine';
        this.ajaxObj = {
            // "async": true,
            // "crossDomain": true,
            url: `https://api.yelp.com/v3/businesses/search?latitude=${this.latitude}location=${this.location}&attributes=${this.attribute}`,
            method: "GET",
            headers: {
              'Authorization': 'Bearer LYh8aLnK3aKVWOQycd5DzPTTrzZg1JY_DYYxs_2YPhIKd9ZpJfE8qR0TRS6nTfzUbGp5Rc5PgnwuBotVWQsyH1BNTr-m4KQxpgEqPPnBgQoV1tT17HTU1Rvu2zWQXHYx'
            },
            data:{
                client_id: 'RVjdHPQEr0T08WhoxqjBQw'
            },
            dataType: 'json',
            success: this.dealData,
            error: this.handleError
          }
          this.getCurrentLocation = this.getCurrentLocation.bind(this);
          this.savePosition = this.savePosition.bind(this);
    }
    getDataFromServer(){
        $.ajax(this.ajaxObj);
    }
    dealData(response){
        debugger;
        console.log(response.coords);
    }
    handleError(error){
        console.log(error.statusText);
    } 
    getCurrentLocation(){
        debugger;
        navigator.geolocation.getCurrentPosition(this.savePosition);
    }
    savePosition(pos){
            const crd = pos.coords;
            this.latitude = crd.latitude.toString();
            this.longitude = crd.longitude.toString();
            console.log('Current location: ',this.latitude, this.longitude);
    }     
}