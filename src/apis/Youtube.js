import axios from 'axios';
// const KEY = 'AIzaSyCLCTtmFC9x98rBBqOivcImbwi4fv3Dzuk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    // params: {
    //     part: 'snippet',
    //     type: 'video',
    //     maxResults: 5,
    //     key: KEY,

    // }
});

