import axios from 'axios';


async function fetchData(url) {
    const request = await axios.get(url);
    const response = await request.data;
    return response

}

export default fetchData;