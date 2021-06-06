// export default class ApiService {
//     constructor() {
        
//         this.searchQuery = '';
        
//         this.page = 1;
//     }
//     fetchPics() {
        
//         const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=21959710-45213a65c7eef9dddd44550a5`;

//         return fetch(url).then(res => res.json())
//             .then(data => {
//                 this.page += 1;
//                 return data;
//             });
//     }
//     resetPage() {
//         this.page = 1;
//     }
//     get query() {
//         return this.searchQuery;
//     }
//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     }
// }
export default {
    page: 1,
    searchQuery: '',
    key: '21959710-45213a65c7eef9dddd44550a5',
  
    async fetchPics() {
        try {
            const res = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`);
            this.page += 1;

            return await res.json();
        }
        catch (err) {
            throw err();
        }
    },
    resetPage() {
        this.page = 1;
    },
  
}


