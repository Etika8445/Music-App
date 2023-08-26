import axios from "axios";
async function getSongs(termName){
    const URL=` https://itunes.apple.com/search?term=${termName}&limit=25&country=in`;
    const response= await axios.get(URL);
    console.log(response.data['results']);
    return response.data['results']
}
const apiClient = {
     async get(URL){
        try{
            const response= await axios.get(URL);
            return response.data;
        }
        catch(err){
            throw err;
        }
    },
    async post(URL, data){
        try{
        const response = await axios.post(URL, data);
        return response;
        }
        catch(err){
            throw err;
        }
    }
}

export {getSongs,apiClient};