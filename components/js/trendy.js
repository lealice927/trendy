class Trendy{
    constructor(){
        this.topicText = $('.topics-title');
        this.addEventListener = this.addEventListener.bind(this);
        this.linkClickCallBack = this.linkClickCallBack.bind(this);
        this.generateHomePage = this.generateHomePage.bind(this);
        this.generateNewPage = this.generateNewPage.bind(this);
    }
    addEventListener(){
        $('.landing').on('click', this.generateHomePage);
        $('.food').on('click', this.linkClickCallBack);
        $('.quote').on('click', this.linkClickCallBack);
        $('.music').on('click', this.linkClickCallBack);
        $('.video').on('click', this.linkClickCallBack);
    }
    linkClickCallBack(childClicked){
        let boxClicked;
        if(childClicked.newElement){
            boxClicked = childClicked.newElement[0].innerText;
        }else{
            boxClicked = childClicked.target.textContent;
        }
        this.emptyBody();
        this.showNavBar();    
        this.emptyHomeBody();
        switch(boxClicked){
            case 'Music':
                this.generateNewPage(Music, 'Top Trendy Music');
                break;
            case 'Food':
                this.generateNewPage(Food, 'Top Trendy Food');
                break;
            case 'Movie':
                this.generateNewPage(Quotes, 'Top Trendy Trump Quotes');
                break;
            case 'Video':
                this.generateNewPage(Video, 'Top Trendy Videos');
        }
    }
    emptyBody(){
        $('#main-content').empty();
    }
    emptyHomeBody(){
        $('.main').remove();
    }
    showNavBar(){
        $('.navbar').show();
        $('.main-body').show();
    }
    hideNavBar(){
        $('.navbar').hide();
        $('.main-body').hide();
    }
    generateHomePage(){
        this.emptyHomeBody();
        this.hideNavBar();
        const homepage = new LandingPage(this.linkClickCallBack);
    }
    generateNewPage(page, text){
        const newPage = new page();
        newPage.getDataFromServer();
        this.topicText.text(text);
    }
}