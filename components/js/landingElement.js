class LandingElement {
    constructor(name, clickCallBack){
        this.elementName = name;
        this.elementClick = clickCallBack;
        this.childClickHandler = this.childClickHandler.bind(this);
    }
    createDomElements(faIcon, containerText){
        const fa = $('<i>').addClass(faIcon);
        const topicIcon = $('<div>').addClass('topic-icon').append(fa);
        const topicText = $('<div>').addClass('topic-text').text(containerText);
        const topics = $('<div>').addClass('topics').append(topicIcon, topicText).on('click', this.childClickHandler);
        return topics;
    }
    childClickHandler(){
        this.elementClick(this);
    }
}
