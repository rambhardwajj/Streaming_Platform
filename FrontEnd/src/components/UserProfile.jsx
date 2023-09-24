import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const UserProfile = () => {
  return ( <div style={{ gap:100,  minHeight: '96vh',  backgroundColor: 'black',  display : 'flex', justifyContent: 'center'}}>
		<Card style={{ marginTop: 100, maxHeight: '40vh', backgroundColor: "grey", color : 'white'}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8fDB8fHww&w=1000&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
			Video 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit possimus 
        </Typography>
      </CardContent>
    </Card>

	<Card style={{ marginTop: 100, maxHeight: '40vh', backgroundColor: "grey", color : 'white'}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8fDB8fHww&w=1000&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
			Video 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit possimus 
        </Typography>
      </CardContent>
    </Card>


	</div>
  )
}

export default UserProfile