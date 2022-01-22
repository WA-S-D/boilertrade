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

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload();
  }

  const secret = () => {
    axios.post("http://localhost:5000/secret", {token: localStorage.getItem('token')}, {
      withCredentials: true
    })
      .then(res => {
        console.log(res.data)
      })
  }

  if (localStorage.getItem('user')) {
    return (
      <>
      <h1>Logout!</h1>
      <button
        onClick={() => logout()}
      > logout</button>
      <button onClick={() => secret()}>secret button</button>
      </>
    )
  }

  return (
    <>
      <h1>Login in with Google!</h1>
      <button
        onClick={() => login(googleProvider)}
      > google login</button>
      <button onClick={() => secret()}>secret button</button>
    </>
  )
}

export default Login;