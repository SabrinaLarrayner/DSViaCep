import * as modalController from './modal-contact.js';
 
export function init(){
    const contactLink = document.querySelector(".contact-link")
     contactLink.addEventListener('click', hendleContactLinkClick);
}

function hendleContactLinkClick(event) {
    event.preventDefault();
    modalController.showModal();
}