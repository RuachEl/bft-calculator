import React, { Component } from "react";
// import { calcFunction } from './index';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import './BoardForm.css';

class BoardFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brdLength: '',
            brdWidth: '',
            brdThickness: '',
            numLayers:'',
            shrinkVal:'',
            calcBft: '',
            shrinkBft:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleClick = () => {
        
        const calcValue = Math.round(((this.state.brdLength * this.state.brdWidth * this.state.brdThickness) / 12) * this.state.numLayers);
        const shrinkValue = Math.round((this.state.shrinkVal * calcValue));
        this.setState({
            calcBft: calcValue,
            shrinkBft: shrinkValue
            
        });
        // this.setState({
        //     shrinkBft: (this.state.calcBft * this.state.shrinkVal)
        // });
    }

    render(){
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label>
                            Board Length:
                            <Input className="formItem" type="number" name="brdLength"
                                value={this.state.brdLength} 
                                onChange={this.handleChange}
                            />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Layer/Board Width:
                            <Input className="formItem" type="number" name="brdWidth"
                                value= {this.state.brdWidth}
                                onChange= {this.handleChange}
                            />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Number of Layers:1+
                            <Input className="formItem" type="number" name="numLayers"
                                value= {this.state.numLayers}
                                onChange= {this.handleChange}
                            />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Board Thickness:
                            <Input className="formItem" type='select' name="brdThickness" value={this.state.brdThickness} onChange={this.handleChange}>
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
                        <Label>
                            Board Code:
                            <Input className="formItem" type='select' name="shrinkVal" value={this.state.shrinkVal} onChange={this.handleChange}>
                                <option value='1'>BDF</option>
                                <option value='1.07'>BFT</option>
                                <option value='1.03'>BF</option>
                                <option value='1.1'>BDFT</option>
                            </Input>
                        </Label>                        
                    </FormGroup>
                    <FormGroup>
                        <Button className="formItem" type="button" onClick={this.handleClick}>
                            Submit
                        </Button>
                    </FormGroup>
                </Form>
                <div>
                    <div className="formItem">BFT: {this.state.calcBft} </div>
                    <div className="formItem">Total BFT: {this.state.shrinkBft} </div>
                </div>
            </div>
        );
    };
}

export default BoardFormComponent;
