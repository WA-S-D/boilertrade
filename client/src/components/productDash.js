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



class Dashboard extends Component {
  constructor () {
    super()
    this.state = { images: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/post', {
    withCredentials: true
  })
  .then((response) => {
    this.setState({ images: response.data});
  })
  }

  for (var i = 0; i < images.length; i++) {
    if (images)
  }

  renderImages() {
    return (
      <div className='scrollable-block'>
        <Grid container justify="center" spacing={4}>
          { this.state.images.map((image) => (
            <Grid item key={image._id} xs={12} sm={6} md={2} lg={4}>
              <Product product={image}></Product>
            </Grid>
          ))}
        </Grid>
      </div>
      
    )
  }

  render () {
    const { images } = this.state
    return images.length ? this.renderImages() : (
      <span>Loading Products...</span>
    )
  }  
}

  // for (var i = 0; i < images.length; i++) {
  //   products[i].id = images._id;
  //   products[i].description = images.desc;
  //   products[i].name = images.name;
  //   products[i].image = images.img;
  // }

export default Dashboard;