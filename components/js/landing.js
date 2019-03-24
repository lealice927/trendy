
class LandingPage {
    constructor(clickCallBack){
        this.elementClick = clickCallBack;
    }
    createDomElements(){
        const titleText = $('<div>').addClass('title-text');
        const titleimg =$('<img>').addClass('titleimg').attr('src', 'components/css/images/rock.png');
        titleText.append(titleimg);
        const subtitleText = $('<div>').addClass('subtitle-text').text('Click and bumb up the top topics!');
        const titleBackground = $('<div>').addClass('title-background').append(titleText, subtitleText);
        const title = $('<div>').addClass('title').append(titleBackground);

        const food = new LandingElement('Food', this.elementClick);
        const foodTopics = food.createDomElements('fas fa-ice-cream', 'Food');
        const music = new LandingElement('Music', this.elementClick);
        const musicTopics = music.createDomElements('fas fa-music', 'Music');
        const foodMusicRow = $('<div>').addClass('topic-row').append(foodTopics, musicTopics);
        const movie = new LandingElement('Movie', this.elementClick);
        const movieTopics = movie.createDomElements('fas fa-film', 'Movie');
        const video = new LandingElement('Video', this.elementClick);
        const videoTopics = video.createDomElements('fab fa-youtube', 'Video');
        const movieVideoRow = $('<div>').addClass('topic-row').append(movieTopics, videoTopics);
        
        const topicBox = $('<div>').addClass('topic-box').append(foodMusicRow, movieVideoRow);
        const topicArea = $('<div>').addClass('topic-area').append(topicBox);
        const main = $('<div>').addClass('main').append(title, topicArea);        
        return main;
    }
    render(divContainer, newElement) {
        $(divContainer).append(newElement);
    }
}
