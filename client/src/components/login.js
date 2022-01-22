import socialMediaAuth from "../service/auth";
import { googleProvider } from "../service/auth-method";
import axios from 'axios';

const Login = () => {
  //login function
  const login = async (provider) => {
    let apiAddress = "";

    if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
      apiAddress = "http://localhost:5000/login";
    }

    const res = await socialMediaAuth(provider);
    if (res.email) {
      const user = {
        email: res.email
      }
      axios.post(apiAddress, { user }, {
        withCredentials: true
      })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', user.email);
          window.location.reload();
        })
    }
  }
  return (
    <>
      <h1>hi</h1>
      <button
        onClick={() => login(googleProvider)}
      > google login</button>
    </>
  )
}

export default Login;