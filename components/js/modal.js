class Modal{
	constructor(content){
		this.modal = null;
        this.body = null;
        this.content = content;
		this.onClose = null;

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

        this.newModal = this.newElement(this.content);
        this.render('body', this.newModal);
        this.init();
    }
    
	show(){
		$(this.newModal).show();
    }
    
	hide(){
		$(this.newModal).hide();
    }
    
	// updateContents(){
	// 	$(this.body).append(this.content);
    // }
    
	init(){
		this.newModal.hide();
		// $(this.content).off('click');
		$(this.modal).on('click', this.hide);
    }

    newElement(newContent){
        this.body = $('<div>').addClass('modalBody').append(newContent);
        this.modal = $('<div>').addClass('modal').append(this.body);
        return this.modal;
    }

    render(divContainer, newElement){
        $(divContainer).append(newElement);
    }

    // newElement(){
    //     this.videoSource = $('<source>');
    //     const modalVideo = $('<video>').addClass('modalVideo').append(videoSource);
    //     this.body = $('<div>').addClass('modalBody').append(modalVideo);
    //     this.content = $('<div>').addClass('modalContent').append(this.body);
    // }
}