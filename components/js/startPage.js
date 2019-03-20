class Trendy{
    constructor(){
        this.tpoicText = $('.topics-title');
        this.addEventListener = this.addEventListener.bind(this);
        this.generateHomePage = this.generateHomePage.bind(this);
        this.generateFoodPage = this.generateFoodPage.bind(this);
        this.generateQuotePage = this.generateQuotePage.bind(this);
        this.generateMusicPage = this.generateMusicPage.bind(this);
        this.generateVideoPage = this.generateVideoPage.bind(this);
    }
    generateHomePage(){
        this.emptyBody();
        const homepage = new homepage();
    }
    addEventListener(){
        $('.landing').on('click', this.generateHomePage);
        $('.food').on('click', this.generateFoodPage);
        $('.quote').on('click', this.generateQuotePage);
        $('.music').on('click', this.generateMusicPage);
        $('.video').on('click', this.generateVideoPage);
    }
    generateFoodPage(){
        debugger;
        this.emptyBody();
        const food = new Food();
        food.generateSearchData();
        this.tpoicText.text('Top Trendy Foods');
    }
    generateMusicPage(){
        this.emptyBody();
        const music = new Music();
        music.getDataFromServer();
        this.tpoicText.text('Top Trendy Musics');
    }
    generateVideoPage(){
        this.emptyBody();
        const youtube = new Video();
        youtube.getDataFromServer();
        this.tpoicText.text('Top Trendy Videos');
    }
    generateQuotePage(){
        this.emptyBody();
        const quote = new Quotes();
        quote.differentResult();
        this.tpoicText.text('Top Trump Quotes');
    }
    emptyBody(){
        $('#main-content').empty();
    }
}