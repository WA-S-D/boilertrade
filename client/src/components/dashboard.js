import { Grid } from '@material-ui/core';
import Product from './products/product';


const products = [
  { id: 1, name: 'Shoes', description: 'running shoes'},
  { id: 2, name: 'Macbook', description: 'Apple macbook'}
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