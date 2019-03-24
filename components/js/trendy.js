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
        $('.movie').on('click', this.linkClickCallBack);
        $('.music').on('click', this.linkClickCallBack);
        $('.video').on('click', this.linkClickCallBack);
    }
    linkClickCallBack(childClicked){
        const boxClicked = childClicked.elementName === undefined ? childClicked.target.textContent : childClicked.elementName;
        this.emptyBody();
        this.emptyHomeBody();
        this.showNavBar();    
        switch(boxClicked){
            case 'Music':
                this.generateNewPage(Music, 'Top Music');
                break;
            case 'Food':
                this.generateNewPage(Food, 'Top Food');
                break;
            case 'Movie':
                this.generateNewPage(Movie, 'Top Movies');
                break;
            case 'Video':
                this.generateNewPage(Video, 'Top Videos');
        }
    }
    emptyBody(){
        $('#main-content').empty();
    }
    emptyHomeBody(){
        $('.main').remove();
        $('.modal').remove();
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
        const landing = new LandingPage(this.linkClickCallBack);
        const homePage = landing.createDomElements();
        landing.render('body', homePage);
    }
    generateNewPage(page, text){
        const newPage = new page();
        newPage.getDataFromServer();
        this.topicText.text(text);
    }
}