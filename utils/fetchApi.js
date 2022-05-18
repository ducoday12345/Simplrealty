import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data }  = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'fefa132f16msh30e59ca74f95d4fp1b5032jsn90e93d517b3a'
          }
    });

    return data;
}