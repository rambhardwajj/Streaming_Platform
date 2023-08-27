import axios from 'axios';

const BaseUrl= 'https://youtube-v31.p.rapidapi.com/captions'

const options = {
	params: {
	  maxResults: '50'
	},
	headers: {
	  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
	  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
  };

  export const fetchFromRapidApi = async ( url ) => {
	const {data} = await axios.get( `${BaseUrl}/${url}`, options );
	return data;
  }