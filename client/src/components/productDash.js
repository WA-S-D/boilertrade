import { Grid } from '@material-ui/core';
import Product from './products/product';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Component } from 'react';
import './dashboard.css';



let products = [
  { id: 1, name: 'Shoes', description: 'this is my brother running shoes, it is really good', image: 'https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?cs=srgb&dl=pexels-cottonbro-5730956.jpg&fm=jpg'},
  { id: 2, name: 'Macbook', description: 'Apple macbook', image: 'https://images.pexels.com/photos/4260477/pexels-photo-4260477.jpeg?cs=srgb&dl=pexels-august-de-richelieu-4260477.jpg&fm=jpg'}
]

class productDash extends Component {
  constructor () {
    super()
    this.state = { yourProducts: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/post', {
    withCredentials: true
  })
  .then((response) => {
    let images = response.data;

    let prods = [];

    for (let i = 0; i < images.length; i++) {
      if (images[i].email == localStorage.getItem('user')) {
        prods.push(images[i]);
      }
    }

    this.setState({ yourProducts: prods });
  })
  }

  renderImages() {
    return (
      <div className='scrollable-block'>
        <Grid container justify="center" spacing={4}>
          { this.state.yourProducts.map((yourProduct) => (
            <Grid item key={yourProduct._id} xs={12} sm={6} md={2} lg={4}>
              <Product product={yourProduct}></Product>
            </Grid>
          ))}
        </Grid>
      </div>
      
    )
  }

  render () {
    const { yourProducts } = this.state;
    return yourProducts.length ? this.renderImages() : (
      <span>Loading Products...</span>
    )
  }  
}

export default productDash;