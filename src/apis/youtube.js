import axios from "axios";
const KEY='AIzaSyAJ3hPCFAzyzf-PNKuwY1NkPTxwONLk4C0'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }

})