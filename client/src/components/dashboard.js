import { Grid } from '@material-ui/core';
import Product from './products/product';


const products = [
  { id: 1, name: 'Shoes', description: 'this is my brother running shoes, it is really good', image: 'https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?cs=srgb&dl=pexels-cottonbro-5730956.jpg&fm=jpg'},
  { id: 2, name: 'Macbook', description: 'Apple macbook', image: 'https://images.pexels.com/photos/4260477/pexels-photo-4260477.jpeg?cs=srgb&dl=pexels-august-de-richelieu-4260477.jpg&fm=jpg'}
]

const Dashboard = () => {
  return (
    <Grid container justify="center" spacing={4}>
      { products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product}></Product>
        </Grid>
      ))}
    </Grid>
  )
}

export default Dashboard;