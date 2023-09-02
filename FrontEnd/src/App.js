import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom';

import { Navbar, Feed, VideoCard, SearchFeed , ChannelDetail , Login, SignUp } from './components';

const App = () =>  (
	<BrowserRouter>
		<div style= {{ backgroundColor : '#000'}} >
			<Navbar /> 
			<Routes>
				<Route path= "/" exact element={<Feed />} /> 
				<Route path= "/video/:id"  element={ <VideoCard /> } /> 
				<Route path= "/channel/:id"  element={ <ChannelDetail /> } /> 
				<Route path= "/search/:searchTerm"  element={ <SearchFeed /> } /> 
				<Route path= "/Login"  element={ <Login /> } /> 
				<Route path= "/SignUp"  element={ <SignUp /> } /> 
			</Routes>
		</div>
	</BrowserRouter>
);

export default App