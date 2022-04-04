import React, {Component} from "react";

let calcFunction = (length, width, thickness) => (length * width * thickness) / 12;

class BoardFormComponent extends Component {
    constructor(props) {
        // let brdLength = 0;
        // let brdThickness = 0;
        // let brdWidth = 0;
        // let calcBft = 0;

        super(props);
        this.state = {
            FormControls: {
                brdLength: {
                    value: ''
                },
                brdThickness: {
                    value: ''
                },
                brdWidth: {
                    value: ''
                },
                calcBft: {
                    value: ''
                },
            },
        

            changeHandler = event => {

                const name = event.target.name;
                const value = event.target.value;

                this.setState({
                    FormControls: {
                        ...this.state.FormControls,
                        [name]: {
                            ...this.state.FormControls[name],
                            value
                        }
                    }
                });
            },

            clickHandler() {
                this.setState({
                    FormControls: {
                        ...this.state.FormControls,
                        calcBft: {
                            ...this.state.FormControls.calcBft,
                                calcFunction(state.FormControls.brdLength.value, this.state.FormControls.brdWidth.value, this.state.FormControls.brdThickness.value)
                        }
                    }
        
                }
                
    }

    
    render() {
        return (
            <div>
                <form>
                    <label>
                        Board Length:
                        <input type="text" name="brdLength"
                            value={
                                this.state.FormControls.brdLength.value
                            }
                            onChange={
                                this.changeHandler
                            }/>
                    </label>

                    <label>
                        Board Thickness:
                        <select value={
                                this.state.FormControls.brdThickness.value
                            }
                            onChange={
                                this.changeHandler
                        }>
                            <option value='0.25'>1/4</option>
                            <option value='0.50'>2/4</option>
                            <option value='0.75'>3/4</option>
                            <option value='1.0'>4/4</option>
                            <option value='1.25'>5/4</option>
                            <option value='1.50'>6/4</option>
                            <option value='1.75'>7/4</option>
                            <option value='2.0'>8/4</option>
                        </select>
                    </label>

                    <label>
                        Board Width:
                        <input type="text" name="brdWidth"
                            value={
                                this.state.FormControls.brdWidth.value
                            }
                            onChange={
                                this.changeHandler
                            }/>
                    </label>
                    <textarea type='text'
                        value={
                            this.state.FormControls.calcBFT.value
                        }
                        disabled/>
                </form>
                <div>
                    <button onClick={() => this.handleClick()}>
                        Submit
                    </button>
                </div>
                <div> {calcBft.value} </div>
            </div>
        )
    }
}

export default BoardFormComponent;
