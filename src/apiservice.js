const BACE_URL = 'https://pixabay.com/api/'
const API_KEY = '23912332-87d188f5be6d9c1e2f8d141dd'
export default {
    apiService(searchImg, numberPage) {
        fetch(`${BACE_URL}?image_type=photo&orientation=horizontal&q=${searchImg}&page=${numberPage}&per_page=12&key=${API_KEY}`)
    }
}