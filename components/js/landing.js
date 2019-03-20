$(document).ready(()=>landingPage = new LandingPage());

class LandingPage {
    constructor(){
        debugger;
        this.newLanding = this.createDomElements();
        this.render('body', this.newLanding);
    }
    createDomElements(){
        const titleText = $('<div>').addClass('title-text').text('Trendy');
        const subtitleText = $('<div>').addClass('subtitle-text').text('Your best way to explore the most updated info...');
        const titleBackground = $('<div>').addClass('title-background').append(titleText, subtitleText);
        const title = $('<div>').addClass('title').append(titleBackground);

        const faUtensils = $('<i>').addClass('fas fa-utensils');
        const foodTopicIcon = $('<div>').addClass('topic-icon').append(faUtensils);
        const foodTopicText = $('<div>').addClass('topic-text').text('Foods');
        const foodTopics = $('<div>').addClass('topics').append(foodTopicIcon, foodTopicText);
        const foodAnchor = $('<a>').attr('href', 'food.html').append(foodTopics);

        const faMusic = $('<i>').addClass('fas fa-music');
        const musicTopicIcon = $('<div>').addClass('topic-icon').append(faMusic);
        const musicTopicText = $('<div>').addClass('topic-text').text('Music');
        const musicTopics = $('<div>').addClass('topics').append(musicTopicIcon, musicTopicText);
        const musicAnchor = $('<a>').attr('href', 'music.html').append(musicTopics);

        const foodMusicRow = $('<div>').addClass('topic-row').append(foodAnchor, musicAnchor);

        const faQuote = $('<i>').addClass('fas fa-quote-right');
        const quoteTopicIcon = $('<div>').addClass('topic-icon').append(faQuote);
        const quoteTopicText = $('<div>').addClass('topic-text').text('Quotes');
        const quoteTopics = $('<div>').addClass('topics').append(quoteTopicIcon, quoteTopicText);
        const quoteAnchor = $('<a>').attr('href', 'quote.html').append(quoteTopics);

        const faVideo = $('<i>').addClass('fas fa-film');
        const videoTopicIcon = $('<div>').addClass('topic-icon').append(faVideo);
        const videoTopicText = $('<div>').addClass('topic-text').text('Videos');
        const videoTopics = $('<div>').addClass('topics').append(videoTopicIcon, videoTopicText);
        const videoAnchor = $('<a>').attr('href', 'video.html').append(videoTopics);

        const quoteVideoRow = $('<div>').addClass('topic-row').append(quoteAnchor, videoAnchor);
        
        const topicBox = $('<div>').addClass('topic-box').append(foodMusicRow, quoteVideoRow);
        const topicArea = $('<div>').addClass('topic-area').append(topicBox);

        const main = $('<div>').addClass('main').append(title, topicArea);

        return main;
    }
    render(divContainer, newElement) {
        $(divContainer).append(newElement);
    }
}
// newElement(image, album, artist, song, link) {
//         const imageBox = $('<div>').addClass('image-box').css('background-image', `url(${image})`);
//         const albumText = $('<p>').text(album);
//         const albumLink = $('<a target="_blank">').attr('href', link);
//         albumLink.append(albumText);
//         const albumTitle = $('<div>').addClass('title-box').append(albumLink);
//         const artistDescription = $('<p>').text('Artist: ' + artist);
//         const songName = $('<p>').text('Song Name: ' + song);
//         const artistAndSongDescription = $('<div>').addClass('description-box').append(artistDescription, songName);
//         const textBox = $('<div>').addClass('text-box').append(albumTitle, artistAndSongDescription);
//         const contentBox = $('<div>').addClass('content-box').append(imageBox, textBox);
//         return contentBox;
//     }
