import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
// import imgs from "E:/ReactJ/ReactApp/CodeForGood/kotak/src/Assest/ImageAbout.png";

export default function MediaCard(props) {
    console.log({props})
  const url="https://www.theladders.com/wp-content/uploads/manager-office-190723.jpg"
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.card.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='table'><Button size="small btn btn primary">Learn More</Button></Link>
      </CardActions>
    </Card>
  );
}
