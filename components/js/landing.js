
class LandingPage {
    constructor(clickCallBack){
        this.elementClick = clickCallBack;
        this.newLanding = this.createDomElements();
        this.render('body', this.newLanding);
    }
    createDomElements(){
        const titleText = $('<div>').addClass('title-text');
        const titleimg =$('<img>').addClass('titleimg').attr('src', 'components/css/images/rock.png');
        titleText.append(titleimg);
        const subtitleText = $('<div>').addClass('subtitle-text').text('Click and bumb up the top topics!');
        const titleBackground = $('<div>').addClass('title-background').append(titleText, subtitleText);
        const title = $('<div>').addClass('title').append(titleBackground);

        const foodTopics = new LandingElement('fas fa-ice-cream', 'Food', this.elementClick);
        const musicTopics = new LandingElement('fas fa-music', 'Music', this.elementClick);
        const foodMusicRow = $('<div>').addClass('topic-row').append(foodTopics.newElement, musicTopics.newElement);

        const movieTopics = new LandingElement('fas fa-film', 'Movie', this.elementClick);
        const videoTopics = new LandingElement('fab fa-youtube', 'Video', this.elementClick);
        const movieVideoRow = $('<div>').addClass('topic-row').append(movieTopics.newElement, videoTopics.newElement);
        
        const topicBox = $('<div>').addClass('topic-box').append(foodMusicRow, movieVideoRow);
        const topicArea = $('<div>').addClass('topic-area').append(topicBox);

        const main = $('<div>').addClass('main').append(title, topicArea);
        
        return main;
    }
    render(divContainer, newElement) {
        $(divContainer).append(newElement);
    }
}
