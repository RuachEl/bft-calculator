import React, { Component } from "react";
import { calcFunction } from './index';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class BoardFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brdLength: 0,
            brdWidth: 0,
            brdThickness: 0,
            calcBft: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleClick() {
        var calcValue = (this.state.brdLength * this.state.brdWidth * this.state.brdThickness) / 12;
        this.setState({
            calcBft: {calcValue}
        });
    }

    render(){
        return (
            <div>
                <Form>
                    <FormGroup>
                    <Label>
                        Board Length:
                        <Input type="number" name="brdLength"
                            value={this.state.brdLength} 
                            onChange={this.handleChange}
                        />
                    </Label>
                    </FormGroup>
                    <FormGroup>
                    <Label>
                        Board Thickness:
                        <Input type='select' name="brdThickness" value={this.state.brdThickness} onChange={this.handleChange}>
                            <option value='0.25'>1/4</option>
                            <option value='0.50'>2/4</option>
                            <option value='0.75'>3/4</option>
                            <option value='1.0'>4/4</option>
                            <option value='1.25'>5/4</option>
                            <option value='1.50'>6/4</option>
                            <option value='1.75'>7/4</option>
                            <option value='2.0'>8/4</option>
                        </Input>
                    </Label>
                    </FormGroup>
                    <FormGroup>
                    <Label>
                        Board Width:
                        <Input type="number" name="brdWidth"
                            value= {this.state.brdWidth}
                            onChange= {this.handleChange}
                        />
                    </Label>
                    </FormGroup>
                    <FormGroup>
                        <Button type="buton" onClick={() => this.handleClick}>
                            Submit
                        </Button>
                    </FormGroup>
                </Form>
                <div>
                    <div>BFT: {this.state.calcBft} </div>
                </div>
            </div>
        );
    };
}

export default BoardFormComponent;
