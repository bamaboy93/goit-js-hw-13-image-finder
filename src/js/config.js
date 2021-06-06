import apiService from './apiService';
import refs from './refs';
import {
    appendGalleryMarkup,
    clearMarkup,
    clearInput,
} from './markup';




refs.searchInput.addEventListener('submit', onSearch);
refs.button.addEventListener('click', onLoadMore);
function onSearch(e){    
    e.preventDefault();                
    
    apiService.searchQuery = e.currentTarget.elements.query.value.trim();
    clearMarkup();
    apiService.resetPage();
    apiService.fetchPics().then(appendGalleryMarkup)
    clearInput();
}

function onLoadMore(e) {
    
    apiService.fetchPics().then(appendGalleryMarkup);
}
