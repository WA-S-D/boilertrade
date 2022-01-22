import {Container, Row, Col, Stack, Button} from 'react-bootstrap';
import './Login.css';

const Login = () => {
  return (
    <body>
      <Container>
        <Row>
          <Col className = "brand">BoilerTrade</Col>
        </Row>
        <Row>
          <Col>
            <img src={"./images/login-photo.png"} className = "left-image"/>
          </Col>
          <Col>
            <div className = "login-text">
              <Stack gap={1} className="col-md-5 mx-auto">
                <div className= "welcome-text">Welcome Back!</div>
                <div className= "signup-text">Login or Sign Up to continue</div>
                <Button variant="outline-light" className = "button">
                  <img src={"./images/google-logo.png"} className = "google"/>
                  <div className="button-text">Sign in with Google</div>
                  </Button>
              </Stack>
            </div>
          </Col>
        </Row>
      </Container>
      </body>
  )
}

export default Login;