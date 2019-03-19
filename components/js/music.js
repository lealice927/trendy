$(document).ready(startMusic);

var iTunesMusic = null;

function startMusic() {
    iTunesMusic = new Music();
}

class Music {
    constructor() {
        this.getDataFromServer();
    }
    getDataFromServer() {
        const ajaxObject = {
            dataType: "json",
            url: "components/php/itunes.php",
            method: "GET",
            success: (response) => {
                console.log(response);
            }
            // error: 
        }
        $.ajax(ajaxObject);
    }
}
