
class Movie {
    constructor() {
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleError = this.handleError.bind(this);
        this.addMoreResults = this.addMoreResults.bind(this);
        this.movieIndex = 0;
        this.index = 10;

        const loader = $('<div>').addClass('loader');
        const pageLoader = $('<div>').addClass('page-loader').append(loader);
        $('#main-content').append(pageLoader);
    }
    getDataFromServer() {
        const ajaxObject = {
            dataType: "json",
            url: "components/php/movies.php",
            method: "GET",
            success: (response) => {
                this.handleSuccess(response);
            },
            error: this.handleError,
        }
        $('.page-loader').show();
        $.ajax(ajaxObject);
    }
    handleSuccess(response) {
        $('.page-loader').hide();
        for (let index = 0; index < this.index; index++) {
            const movieImage = response.feed.results[index].artworkUrl100;
            const movieName = `# ${index + 1} :  ${response.feed.results[index].name}`;
            const director = response.feed.results[index].artistName;
            const name = response.feed.results[index].name;
            const moviePreview = response.feed.results[index].url;
            const genre = response.feed.results[index].genres[0].name;
            const newDiv = this.newElement(movieImage, movieName, director, name, moviePreview, genre);
            this.render('#main-content', newDiv)
        }
        this.index += 10
    }

    handleError() {
        $('#main-content').empty();
        const errorimg = $('<img>').attr({
            'src': 'components/css/images/serverdown.png',
            'width': '100%'
        });
        const errorMessage = $('<div>').addClass('error-message');
        errorMessage.append(errorimg);
        const errorContainer = $('<div>').addClass('error-container').append(errorMessage);
        this.render('#main-content', errorContainer);
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
    addMoreResults() {
        $('#main-content').empty();
        this.getDataFromServer();
        this.addMoreResultsButton();

    }

    addMoreResultsButton() {
        const addButton = $('<button>').addClass('add-button').text('Show More').on('click', this.addMoreResults);
        this.render('#main-content', addButton);
    }
}
