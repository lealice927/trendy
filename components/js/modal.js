class Modal{
	constructor(content){
		this.modal = null;
        this.body = null;
        this.content = content;
        this.show = this.show.bind(this);
        this.remove = this.remove.bind(this);
        this.newModal = this.newElement(this.content);
        this.render('body', this.newModal);
        this.init();
    }    
	show(){
		$(this.newModal).show();
    }
    remove(){
        $('.modal').remove()
    }       
	init(){
        this.show();
		$(this.modal).on('click', this.remove);
    }
    newElement(newContent){
        this.body = $('<div>').addClass('modalBody').append(newContent);
        this.modal = $('<div>').addClass('modal').append(this.body);
        return this.modal;
    }
    render(divContainer, newElement){
        $(divContainer).append(newElement);
    }
}