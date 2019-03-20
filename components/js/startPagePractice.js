$(document).ready(initializeApp);

var start = null;
function initializeApp(){
    start = new Landing;

}




class Landing{
    constructor( ){
        this.mainTitle = null;
        this.topicArea = null;
    }
    var hello = null;
    //function get jquery created var into body
    getPieces(){
        console.log ("working", hello)
    }
    
}

