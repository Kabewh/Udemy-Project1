import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 5NSSeY2UxTwBCfEf0BOJ9WvIkPZd6BbZ5vIbIsMIWz8'
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};

export default searchImages;