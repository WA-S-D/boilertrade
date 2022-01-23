import React, { useState, useEffect, Component } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from '../components/controls/Controls';
import { useForm, Form } from './controls/use_form';
import axios from 'axios';

class EmployeeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            desc: null,
            name: null,
            email: localStorage.getItem('user')
        }
    }

    onChangeHandler = event => {
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
          .then(res => {
            console.log(res.statusText)
            window.location.href = "/dashboard";
          })
    }

    cancel = () => {
        window.location.href = "/dashboard";
    }

    render() {
        return (

            <Form>
                <h1>Upload Your Product!</h1>

                <Grid container>
                    <Grid item xs={13}>
                        <Controls.Input
                            name="Image Title"
                            label="Enter Your Product's Name"
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                        <Controls.Input
                            name="Image description"
                            label="Enter Discription"
                            onChange={(e) => this.setState({ desc: e.target.value })}
                        />
                        {/* <Controls.Input
                            name="Email"
                            label="Ex: pete@purdue.edu"
                            onChange={(e) => this.setState({ email: e.target.value })}
                        /> */}
                        <br></br>
                        <input type="file" id="image"
                            name="image" value="" onChange={this.onChangeHandler}></input>
                        <br></br>
                        <div>
                            <Controls.Button
                                type="submit"
                                text="Submit"
                                onClick={this.onClickHandler} />
                            <Controls.Button
                                text="Cancel"
                                onClick={this.cancel} />
                        </div>
                    </Grid>
                </Grid>
            </Form>
        )
    }

}

export default EmployeeForm;
