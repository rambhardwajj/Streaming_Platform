const express = require('express'); 
const fs = require('fs');
const jwt = require('jsonwebtoken');
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

// UserRoutes 
app.get('/user/me' , authenticationJWT, (req, res) => {
	res.json({ username : req.user.username })
})

app.get('/user/signup', ( req, res)=>{
	const { username , password} = req.body;
	const user=  USERS.find( u => u.username === username );
	if(user){
		res.status(403).json({ message : "User already exists"});
	}else{
		const newUser = { username , password, userImage};
		USERS.push( newUser);
		fs.writeFileSync( 'users.json', JSON.stringify(USERS));
		const token = jwt.sign( { username, role: 'user' }, secretKey, { expiresIn: '1h' } );
		res.json({ message: 'User created Successfully' , token });
	}
}); 

app.post('/user/login', authenticationJWT,  (req, res) => {
	const {username , password} = req.headers;
	const user= USERS.find( u => u.username === username  && u.password===password);

	if( user){
		const token = jwt.sign({ username , role : 'user' }, secretKey, {expiresIn : '1h'});
		res.json({ message : "Logged In ", token});
	}else{
		res.sendStatus(404).json({message : "username doesnt exist"});
	}
});


app.listen(3000, () => console.log('Server running on port 3000'));