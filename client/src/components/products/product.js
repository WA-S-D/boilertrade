import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import '../dashboard.css'
import { useState } from 'react';

const Product = ({product}) => {
  const classes = useStyles();
  

  function toBase64(arr) {
    arr = new Uint8Array(arr);
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    
    );
  }
  // console.log(product.img.data.data)
  console.log(toBase64(product.img.data.data));

  return (
    <>
    <Card className={classes.root}>
      <img src={`data:image/png;base64, ${toBase64(product.img.data.data)}`} className='product-item'>
        </img>
      {/* <CardMedia className={classes.media}  component='img' src={`data:image/png;base64, ${toBase64(product.img.data.data)}`} title={product.name} /> */}
      {/* <CardMedia className={classes.media} image="data:image/<%=product.img.contentType%>;base64,<%=product.img.data.toString('base64')%>" title={product.name} /> */}
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h4" component="h1">
            {product.name}
          </Typography>
          {/* <Typography gutterBottom variant="h8" component="h8">
            {product.email}
          </Typography> */}
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.desc }} variant="h6" color="textSecondary" component="p" />
        <Typography dangerouslySetInnerHTML={{ __html: product.email }} variant="h6" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" a href = {"mailto:" + product.email}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
    </>
  )
}

export default Product;