
class Movie {
    getDataFromServer() {
        const ajaxObject = {
            dataType: "json",
            url: "components/php/movies.php",
            method: "GET",
            success: (response) => {
                for (let index = 0; index < 10; index++) {
                    const movieImage = response.feed.results[index].artworkUrl100;
                    const movieName = `# ${index + 1} :  ${response.feed.results[index].name}`;
                    const director = response.feed.results[index].artistName;
                    const name = response.feed.results[index].name;
                    const moviePreview = response.feed.results[index].url;
                    const genre = response.feed.results[index].genre[index].name;
                    const newDiv = this.newElement(movieImage, movieName, director, name, moviePreview, genre);
                    this.render('#main-content', newDiv)
                }
            },
            error: () => alert('Failed to contact server')
        }
        $.ajax(ajaxObject);
    }
    newElement(image, movie, director, genre, link) {
        const imageBox = $('<div>').addClass('image-box').css('background-image', `url(${image})`);
        const movieText = $('<p>').text(movie);
        const movieLink = $('<a target="_blank">').attr('href', link);
        movieLink.append(movieText);
        const movieTitle = $('<div>').addClass('title-box').append(movieLink);
        const directorDescription = $('<p>').text('Director(s): ' + director);
        const genreName = $('<p>').text('Genre: ' + genre);
        const directorAndgenre = $('<div>').addClass('description-box').append(directorDescription, genreName);
        const textBox = $('<div>').addClass('text-box').append(movieTitle, directorAndgenre);
        const contentBox = $('<div>').addClass('content-box').append(imageBox, textBox);
        return contentBox;
    }
    render(divContainer, newElement) {
        $(divContainer).append(newElement);
    }
}

