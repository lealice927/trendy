
class LandingPage {
    constructor(clickCallBack){
        this.callback={
            food: clickCallBack.food,
            music: clickCallBack.music,
            video: clickCallBack.video,
            quote: clickCallBack.quote
        }
        this.element = null;
        this.newLanding = this.createDomElements();
        this.render('body', this.newLanding);
        this.createDomElements = this.createDomElements.bind(this);
        // this.childClickHandler = this.childClickHandler.bind(this);
    }
    createDomElements(){
        const titleText = $('<div>').addClass('title-text').text('Trendy');
        const subtitleText = $('<div>').addClass('subtitle-text').text('Your best way to explore the most updated info...');
        const titleBackground = $('<div>').addClass('title-background').append(titleText, subtitleText);
        const title = $('<div>').addClass('title').append(titleBackground);

        const faUtensils = $('<i>').addClass('fas fa-utensils');
        const foodTopicIcon = $('<div>').addClass('topic-icon').append(faUtensils);
        const foodTopicText = $('<div>').addClass('topic-text').text('Foods');
        // const foodTopics = $('<div>').addClass('topics').append(foodTopicIcon, foodTopicText).on('click', this.childClickHandler);
        const foodTopics = $('<div>').addClass('topics').append(foodTopicIcon, foodTopicText).on('click', this.findBlockClicked);

        const faMusic = $('<i>').addClass('fas fa-music');
        const musicTopicIcon = $('<div>').addClass('topic-icon').append(faMusic);
        const musicTopicText = $('<div>').addClass('topic-text').text('Music');
        // const musicTopics = $('<div>').addClass('topics').append(musicTopicIcon, musicTopicText).on('click', this.childClickHandler);
        const musicTopics = $('<div>').addClass('topics').append(musicTopicIcon, musicTopicText).on('click', this.findBlockClicked);

        const foodMusicRow = $('<div>').addClass('topic-row').append(foodTopics, musicTopics);

        const faQuote = $('<i>').addClass('fas fa-quote-right');
        const quoteTopicIcon = $('<div>').addClass('topic-icon').append(faQuote);
        const quoteTopicText = $('<div>').addClass('topic-text').text('Quotes');
        // const quoteTopics = $('<div>').addClass('topics').append(quoteTopicIcon, quoteTopicText).on('click', this.childClickHandler);
        const quoteTopics = $('<div>').addClass('topics').append(quoteTopicIcon, quoteTopicText).on('click', this.findBlockClicked);

        const faVideo = $('<i>').addClass('fas fa-film');
        const videoTopicIcon = $('<div>').addClass('topic-icon').append(faVideo);
        const videoTopicText = $('<div>').addClass('topic-text').text('Videos');
        // const videoTopics = $('<div>').addClass('topics').append(videoTopicIcon, videoTopicText).on('click', this.childClickHandler);
        const videoTopics = $('<div>').addClass('topics').append(videoTopicIcon, videoTopicText).on('click', this.findBlockClicked);

        const quoteVideoRow = $('<div>').addClass('topic-row').append(quoteTopics, videoTopics);
        
        const topicBox = $('<div>').addClass('topic-box').append(foodMusicRow, quoteVideoRow);
        const topicArea = $('<div>').addClass('topic-area').append(topicBox);

        const main = $('<div>').addClass('main').append(title, topicArea);

        return main;
    }
    render(divContainer, newElement) {
        $(divContainer).append(newElement);
    }
    findBlockClicked(){
        console.log(this);
        const containerText = $(this).find('.topic-text').text();
        console.log(containerText);
        div = containerText;
        omg();
    }

}
