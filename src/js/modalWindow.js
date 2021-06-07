import * as basicLightbox from 'basiclightbox';
import refs from './refs';

refs.gallery.addEventListener('click', openModalWindow);

function openModalWindow(e){
    if(e.target.nodeName !== "IMG"){
        return
    }
    const largeImageURL = e.target.dataset.source;
    openModal(largeImageURL);
}

function openModal(url){
    basicLightbox.create(`<img src="${url}" width="1600" height="900">`).show();
}