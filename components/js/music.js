
class Music {
    getDataFromServer() {
        const ajaxObject = {
            dataType: "json",
            url: "components/php/itunes.php",
            method: "GET",
            success: (response) => {
                for (let index = 0; index < 10; index++) {
                const albumImage = response.feed.results[index].artworkUrl100;
                const albumName = `# ${index+1} :  ${response.feed.results[index].collectionName}`;
                const artist = response.feed.results[index].artistName;
                const songName = response.feed.results[index].name;
                const iTunesAlbum = response.feed.results[index].url;
                const newDiv = this.newElement(albumImage, albumName, artist, songName, iTunesAlbum);
                this.render('#main-content', newDiv)
                }
            },
            error: ()=>alert('Failed to contact server')
        } 
        $.ajax(ajaxObject);
    }
    newElement(image, album, artist, song, link) {
        const imageBox = $('<div>').addClass('image-box').css('background-image', `url(${image})`);
        const albumText = $('<p>').text(album);
        const albumLink = $('<a target="_blank">').attr('href', link);
        albumLink.append(albumText);
        const albumTitle = $('<div>').addClass('title-box').append(albumLink);
        const artistDescription = $('<p>').text('Artist: ' + artist);
        const songName = $('<p>').text('Song Name: ' + song);
        const artistAndSongDescription = $('<div>').addClass('description-box').append(artistDescription, songName);
        const textBox = $('<div>').addClass('text-box').append(albumTitle, artistAndSongDescription);
        const contentBox = $('<div>').addClass('content-box').append(imageBox, textBox);
        return contentBox;
    }
    render(divContainer, newElement) {
        $(divContainer).append(newElement);
    }
}

