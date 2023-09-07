import axios from 'axios';

const BaseUrl= 'https://youtube-v31.p.rapidapi.com'

// These are the headers and the obj that we pass in the axios request 
const options = {
	params: {
	  maxResults: '50'
	},
	headers: {
		// REACT_APP_RAPID_API_KEY is a key that is given to the user when we logged in the RapidAPI
		// the real key is stored in the env file in the root folder 
	 	'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY , 
	  	'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
  }; 

  // Make the Component and start with the axios request 
  export const fetchFromRapidApi = async ( url ) => {
	// fetching the data by passing our base url and the custom url we take as props in the component from the other components 
	const {data} = await axios.get( `${BaseUrl}/${url}`, options );
	return data;
  }
