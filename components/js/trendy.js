class Trendy{
    constructor(){
        this.topicText = $('.topics-title');
        this.callback  = {
            food: this.generateFoodPage,
            quote: this.generateQuotePage,
            video: this.generateVideoPage,
            music: this.generateMusicPage
        }
        this.addEventListener = this.addEventListener.bind(this);
        this.generateHomePage = this.generateHomePage.bind(this);
        this.generateFoodPage = this.generateFoodPage.bind(this);
        this.generateQuotePage = this.generateQuotePage.bind(this);
        this.generateMusicPage = this.generateMusicPage.bind(this);
        this.generateVideoPage = this.generateVideoPage.bind(this);
    }
    emptyBody(){
        $('#main-content').empty();
    }
    showNavBar(){
        $('.navbar').show();
        $('.main-body').show();
    }
    hideNavBar(){
        $('.navbar').hide();
        $('.main-body').hide();
    }
    addEventListener(){
        $('.landing').on('click', this.generateHomePage);
        $('.food').on('click', this.generateFoodPage);
        $('.quote').on('click', this.generateQuotePage);
        $('.music').on('click', this.generateMusicPage);
        $('.video').on('click', this.generateVideoPage);
    }
    emptyHomeBody(){
        $('.main').remove();
    }
    generateHomePage(){
        debugger;
        this.emptyHomeBody();
        this.hideNavBar();
        const homepage = new LandingPage(this.callback);
    }
    generateFoodPage(){
        this.emptyHomeBody();
        this.emptyBody();
        this.showNavBar();
        const food = new Food();
        food.generateSearchData();
        this.topicText.text('Top Trendy Foods');
    }
    generateMusicPage(){
        this.emptyHomeBody();
        this.emptyBody();
        this.showNavBar();
        const music = new Music();
        music.getDataFromServer();
        this.topicText.text('Top Trendy Musics');
    }
    generateVideoPage(){
        this.emptyHomeBody();
        this.emptyBody();
        this.showNavBar();
        const youtube = new Video();
        youtube.getDataFromServer();
        this.topicText.text('Top Trendy Videos');
    }
    generateQuotePage(){
        this.emptyHomeBody();
        this.emptyBody();
        this.showNavBar();
        const quote = new Quotes();
        quote.getDataFromServer();
        this.topicText.text('Top Trump Quotes');
    }
}