import {Container, Row, Col, Stack, Button} from 'react-bootstrap';
import './Login.css';
import socialMediaAuth from "../service/auth";
import { googleProvider } from "../service/auth-method";
import GoogleButton from 'react-google-button'
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
    <Container>
      <Row>
        <Col className = "brand">BoilerTrade</Col>
      </Row>
      <Row>
        <Col className="col-md-7 mx-auto">
          <img src={"./images/login-photo.png"} className = "left-image"/>
        </Col>
        <Col>
          <div className = "login-text">
            <Stack gap={1} className="col-md-4 mx-auto">
              <div className= "welcome-text">Welcome Back!</div>
              <div className= "signup-text">Login or Sign Up to continue</div>
              <GoogleButton className="login-button"
                onClick={() => { login(googleProvider) }}
              />
            </Stack>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;