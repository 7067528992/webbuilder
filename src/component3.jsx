// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';

export default function MultiActionAreaCard() {
  return (
    <div className='card-component'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image =  "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jd5lN84cl8O~LXXMpoOBFN1Ihsi7r8n1AQf5aMS~VBnObDIoKGYZp9J087BkkmQ1~oXFFo43s11V5VCq16X54YgwYOL3KNG1gxIKQqammYppA5~lfBk9x2OBTi23d1N71ledT2WZZNtYcVo9L6dK7RcNbvzF8xP54B7Pwz5kI~FhfXNa5MA8sXsZPofP~Xa78bz3IaefjAm9JqtItq2TKGkfS2v4o12I84X1yxNkPdVZduaU66sV2qRl8yMqEVAmgXRWUpG4r3F6TjlqYhtvZbLDRU-oyhDudtAxJM4Oq2aanq8BVyGgsSABp-xsn97ry7ObEXu9Tl516aeVV-1SeQ__"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <div className='offer'>
                <div id='off'>20% off</div>
                <div id='lmt'>Limited time</div>
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div id='builder'>web builder 1</div>
           Computer modern classic with wix support
           <div className='price'>
                <p id='lmt'>$39.96</p>
                <p id='h-price'>$49.50</p>
                <p id='off'>20% off</p>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className='btn'>
      <Button variant="contained" disableElevation>
      View Deals
    </Button></div>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jd5lN84cl8O~LXXMpoOBFN1Ihsi7r8n1AQf5aMS~VBnObDIoKGYZp9J087BkkmQ1~oXFFo43s11V5VCq16X54YgwYOL3KNG1gxIKQqammYppA5~lfBk9x2OBTi23d1N71ledT2WZZNtYcVo9L6dK7RcNbvzF8xP54B7Pwz5kI~FhfXNa5MA8sXsZPofP~Xa78bz3IaefjAm9JqtItq2TKGkfS2v4o12I84X1yxNkPdVZduaU66sV2qRl8yMqEVAmgXRWUpG4r3F6TjlqYhtvZbLDRU-oyhDudtAxJM4Oq2aanq8BVyGgsSABp-xsn97ry7ObEXu9Tl516aeVV-1SeQ__"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <div className='offer'>
                <div id='off'>20% off</div>
                <div id='lmt'>Limited time</div>
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <div id='builder'>web builder 1</div>
          Computer modern classic with wix support
          <div className='price'>
                <p id='lmt'>$39.96</p>
                <p id='h-price'>$49.50</p>
                <p id='off'>20% off</p>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className='btn'>
      <Button variant="contained" disableElevation>
      View Deals
    </Button></div>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jd5lN84cl8O~LXXMpoOBFN1Ihsi7r8n1AQf5aMS~VBnObDIoKGYZp9J087BkkmQ1~oXFFo43s11V5VCq16X54YgwYOL3KNG1gxIKQqammYppA5~lfBk9x2OBTi23d1N71ledT2WZZNtYcVo9L6dK7RcNbvzF8xP54B7Pwz5kI~FhfXNa5MA8sXsZPofP~Xa78bz3IaefjAm9JqtItq2TKGkfS2v4o12I84X1yxNkPdVZduaU66sV2qRl8yMqEVAmgXRWUpG4r3F6TjlqYhtvZbLDRU-oyhDudtAxJM4Oq2aanq8BVyGgsSABp-xsn97ry7ObEXu9Tl516aeVV-1SeQ__"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className='offer'>
                <div id='off'>20% off</div>
                <div id='lmt'>Limited time</div>
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <div id='builder'>web builder 1</div>
            Computer modern classic with wix support
            <div className='price'>
                <p id='lmt'>$39.96</p>
                <p id='h-price'>$49.50</p>
                <p id='off'>20% off</p>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className='btn'>
      <Button variant="contained" disableElevation>
      View Deals
    </Button></div>
      </CardActions>
    </Card>





    </div>
  );
}
