import refs from './refs';
import apiService from './apiService';
import galleryCardTpl from '../templates/galleryCard.hbs'

function appendGalleryMarkup(data) {
    
    const result = data.hits.length;
    if (result !== 0) {
        refs.gallery.insertAdjacentHTML('beforeend', galleryCardTpl(data));
        loadBtn.show();
        loadBtn.enable();
    }
    if (result < 12) {
        
        loadBtn.disable();
    }
    if (result === 0) {
        alert("Sorry! Try to find something else.:)");
    }
    if (apiService.page > 2) {
        window.scrollTo({
            top: document.documentElement.offsetHeight - 100,
        });
    }
    
}

const loadBtn = {
    enable(){
        refs.button.disabled = false;
    },

    disable(){
        refs.button.disabled = true;
    },

    show() {
        refs.button.classList.remove('is-hidden');
    },

    hide(){
        refs.button.classList.add('is-hidden');
    }
};

function clearMarkup() {
  refs.gallery.innerHTML = "";
}
function clearInput() {  
    refs.searchInput.query.value = '';   
        
}




export {
    appendGalleryMarkup,
    clearMarkup,
    clearInput
    
}