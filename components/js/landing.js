class LandingPage {
    constructor(){

    }
    newLandingElement(title){
        const titleText = $('<div>').addClass('title-text').text('Trendy');
        const subtitleText = $('<div>').addClass('subtitle-text').text('Your '+'best '+'way '+'to '+'explore '+'the '+'most '+'updated '+'info... ');
        const titleArea = $('<div>').addClass('title-background');
        const entireTitle = $('<div>').addClass('title').append()
    
    }
    render(newLandingElement){
        $(body).append(newLandingElement);
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
//     render(divContainer, newElement) {
//         $(divContainer).append(newElement);
//     }