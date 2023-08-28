const express = require('express'); 
const fs = require('fs');
const jwt = require('jsonwebtokens');
const cors = require('cors');

const app  = express();

app.use(cors());
app.use(express.json());

let USERS = []; 

try{
	USERS = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
}catch{
	USERS = [];
}

console.log(USERS);

const secretKey = 'myVidStreamingApp';

const authenticationJWT = (req, res, next) =>{
	const authHeader = req.headers.authorization;
	if( authHeader){
		const token = authHeader.split(' ')[1];
		jwt.verify( token, secretKey, (err,user) =>{
			if(err){
				return res.sendStatus(401);
			}
			req.user = user;
			next();
		});
	} else{
		res.sendStatus(402);
	}
};