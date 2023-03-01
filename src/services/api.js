// Api call can be made through axios -> npm i axios

import axios from 'axios';
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '20259577-c93c75abc878a636931b34317';

export const getImage = async (text,count)=>{
    try{
      return  await axios.get(`${API_URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}`);
    }catch(error){
        console.log("Error while communicating with the api: ",error.message);
    }
}


