import axios from 'axios';


async function fetchData(url) {
    try {
        const request = await axios.get(url);
        const response = await request.data;
        return response;
    } catch (err) {
        throw err
    }

}

export default fetchData;