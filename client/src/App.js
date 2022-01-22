import logo from './logo.svg';
import './App.css';
import useState from 'react-hook-use-state';
import axios from 'axios';
import react, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        desc: null,
        name: null
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
    axios.post("http://localhost:5000/post", data, { 
      // receive two    parameter endpoint url ,form data
    })
    .then (res => {
      console.log(res.statusText)
    })
  }

  render() {
  return (
    <div className="App">
      <h1>Upload to server</h1>
      <div>
        <div>
            <label for="name">Image Title</label>
            <input type="test" id="name" placeholder="Name" defaultValue="" name="name" required onChange={(e) => this.setState( { name: e.target.value })}>

            </input>
          </div>
          <div>
            <label for ="desc">Image Description</label>
            <textarea id="desc" name="desc" defaultValue="" rows="2" placeholder="Description" required onChange={(e) => this.setState( { desc: e.target.value })}>

            </textarea>
          </div>
          <div>
          <label for="image">Upload Image</label>
          <input type="file" id="image"
            name="image" value="" required onChange={this.onChangeHandler}></input>
          </div>
          <div>
            <button type="submit" onClick={this.onClickHandler}>Submit</button>
          </div>
      </div>
    </div>
  );
  }
};

export default App;
