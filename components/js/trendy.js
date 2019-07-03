class Trendy{
    constructor(){
        this.topicText = $('.topics-title');
        this.navbar = $('.navbar');
        this.mainBody = $('.main-body');
        this.navList = $('.nav');
        this.addEventListener = this.addEventListener.bind(this);
        this.linkClickCallBack = this.linkClickCallBack.bind(this);
        this.generateHomePage = this.generateHomePage.bind(this);
        this.generateNewPage = this.generateNewPage.bind(this);
        this.menuClicked = this.menuClicked.bind(this);
    }
    addEventListener(){
        $('.landing').on('click', this.generateHomePage);
        $('.food').on('click', this.linkClickCallBack);
        $('.movie').on('click', this.linkClickCallBack);
        $('.music').on('click', this.linkClickCallBack);
        $('.video').on('click', this.linkClickCallBack);
        $('.nav-menu').on('click', this.menuClicked);
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
        this.navbar.show();
        this.mainBody.show();
    }
    hideNavBar(){
        this.navbar.hide();
        this.mainBody.hide();
    }
    menuClicked(){
        this.navList.toggle();
    }
    generateHomePage(){
        this.emptyHomeBody();
        this.hideNavBar();
        if ($(window).width() < 786) {
            this.navList.hide();
        }
        const landing = new LandingPage(this.linkClickCallBack);
        const homePage = landing.createDomElements();
        landing.render('body', homePage);
    }
    generateNewPage(page, text){
        const newPage = new page();
        newPage.getDataFromServer();
        newPage.addMoreResultsButton();
        this.topicText.text(text);
    }
}