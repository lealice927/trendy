
class LandingPage {
    constructor(clickCallBack){
        this.elementClick = clickCallBack;
        this.newLanding = this.createDomElements();
        this.render('body', this.newLanding);
    }
    createDomElements(){
        const titleText = $('<div>').addClass('title-text').text('Trendy');
        const subtitleText = $('<div>').addClass('subtitle-text').text('Your best way to explore the most updated info...');
        const titleBackground = $('<div>').addClass('title-background').append(titleText, subtitleText);
        const title = $('<div>').addClass('title').append(titleBackground);

        const foodTopics = new LandingElement('fas fa-ice-cream', 'Food', this.elementClick);
        const musicTopics = new LandingElement('fas fa-music', 'Music', this.elementClick);
        const foodMusicRow = $('<div>').addClass('topic-row').append(foodTopics.newElement, musicTopics.newElement);

        const quoteTopics = new LandingElement('fas fa-film', 'Movie', this.elementClick);
        const videoTopics = new LandingElement('fab fa-youtube', 'Videos', this.elementClick);
        const quoteVideoRow = $('<div>').addClass('topic-row').append(quoteTopics.newElement, videoTopics.newElement);
        
        const topicBox = $('<div>').addClass('topic-box').append(foodMusicRow, quoteVideoRow);
        const topicArea = $('<div>').addClass('topic-area').append(topicBox);

        const main = $('<div>').addClass('main').append(title, topicArea);

        return main;
    }
    render(divContainer, newElement) {
        $(divContainer).append(newElement);
    }
}
