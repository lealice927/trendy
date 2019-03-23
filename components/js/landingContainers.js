class LandingElement {
    constructor(faIcon, containerText, clickCallBack){
        this.elementClick = clickCallBack;
        this.childClickHandler = this.childClickHandler.bind(this);
        this.newElement = this.createDomElements(faIcon, containerText, this.childClickHandler);
    }
    createDomElements(faIcon, containerText, clickCallBack){
        const fa = $('<i>').addClass(faIcon);
        const topicIcon = $('<div>').addClass('topic-icon').append(fa);
        const topicText = $('<div>').addClass('topic-text').text(containerText);
        const topics = $('<div>').addClass('topics').append(topicIcon, topicText).on('click', clickCallBack);
        return topics;
    }
    childClickHandler(){
        this.elementClick(this);
    }
}
