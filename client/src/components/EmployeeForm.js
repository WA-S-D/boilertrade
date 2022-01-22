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
            name: null
        }
    }

    onChangeHandler = event => {
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }

    handleSubmit() {
        console.log("hi")
        //e.preventDefault()
        // if (validate()){
        //     employeeService.insertEmployee(values)
        //     resetForm()
        // }
    }

    resetForm() {
        this.setState({ name: "" });
        this.setState({ desc: "" });
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('image', this.state.selectedFile)
        data.append('name', this.state.name)
        data.append('desc', this.state.desc)
        axios.post("http://localhost:5000/post", data, {
    
        })
          .then(res => {
            console.log(res.statusText)
          })
      }

    render() {
        return (

            <Form onSubmit={this.handleSubmit}>
                <h1>Upload to server</h1>

                <Grid container>
                    <Grid item xs={13}>
                        <Controls.Input
                            name="Image Title"
                            label="Ex: Image1"
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                        <Controls.Input
                            label="Image description"
                            name="Ex: Beautiful"
                            //    value={values.email}
                            onChange={(e) => this.setState({ desc: e.target.value })}
                        // error={errors.fullName}
                        />
                        <br></br>
                        <input type="file" id="image"
                            name="image" value="" required onChange={this.onChangeHandler}></input>
                        <br></br>
                        <div>
                            <Controls.Button
                                type="submit"
                                text="Submit" />
                        </div>
                    </Grid>
                </Grid>
            </Form>
        )
    }

}

export default EmployeeForm;
