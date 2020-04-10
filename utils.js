import secrets from './secrets'
const API_KEY = API_KEY_SECRET;


// took out Max Results from urls 
const urls = [
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL4W7Aa3_xVcfplsKGVyAEtKgpWaZ05cyf&part=snippet%2CcontentDetails&key=${API_KEY}`, 
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL4W7Aa3_xVccPBZ6nucbBpJaqP0H_tsVL&part=snippet%2CcontentDetails&key=${API_KEY}`,
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL4W7Aa3_xVcdO6JOMXu-qzC5wtLRI3AUh&part=snippet%2CcontentDetails&key=${API_KEY}`, 
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL4W7Aa3_xVcf_pqPOmmNxvdZKGhjNBfvz&part=snippet%2CcontentDetails&key=${API_KEY}`
] 

export function surpriseUrl() { 
    const url = urls[Math.floor(Math.random() * urls.length)];
    return url; 
}



