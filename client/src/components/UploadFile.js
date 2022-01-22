import '../App.css';
import useState from 'react-hook-use-state';
import axios from 'axios';
import react, { Component } from 'react';
import './upload.css';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

class UploadFile extends Component {

  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        desc: null,
        name: null,
        email: null
      }
  }

  onChangeHandler=event=> {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  onClickHandler = () => {
    const data = new FormData() 
    data.append('image', this.state.selectedFile)
    data.append('name', this.state.name)
    data.append('desc', this.state.desc)
    data.append('email', this.state.email)
    axios.post("http://localhost:5000/post", data, { 
  
    })
    .then (res => {
      console.log(res.statusText)
    })
  }

  render() {
  return (
    // <div style={{ display: 'block', 
    //               width: 700, 
    //               padding: 30 }}>
    <>
      <Container fluid>
        <Row>
          <Col md="2" />
          <Col md="8">
            <h4>Upload Your Product!</h4>
            <Form>
            <Form.Group>
                <Form.Label>Your Email:</Form.Label>
                <Form.Control type="text" 
                              id="email"
                              name="email"
                              placeholder="Enter your your email address" 
                              required
                              onChange={(e) => this.setState( { email: e.target.value })}/>
              </Form.Group>
            <Form.Group>
                <Form.Label>Name of your product:</Form.Label>
                <Form.Control type="text" 
                              placeholder="Enter your full name" 
                              id="name"
                              name="name"
                              required
                              onChange={(e) => this.setState( { name: e.target.value })}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description of you product:</Form.Label>
                <Form.Control type="text" 
                              id="desc"
                              name="desc"
                              placeholder="Descriptoin" 
                              required
                              onChange={(e) => this.setState( { desc: e.target.value })}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Upload Image</Form.Label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  value=""
                  // required
                  onChange={this.onChangeHandler}>
                </input>
              </Form.Group>
              <div className="submit-button">
                <Button variant="primary" type="submit" onClick={this.onClickHandler}>
                  Click here to submit form
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      
    </>
    // </div>
  );
  }
};

export default UploadFile;