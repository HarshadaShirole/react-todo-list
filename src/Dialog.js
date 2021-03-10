import React,{Component} from 'react';
import CustomButton from './CustomButton';
import "./Common.css";
class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
        }
    this.handleChange = this.handleChange.bind(this);

    }
    handleInputChange = () => {
        var inputValue = this.state.value;
        this.props.handleDialogClick(inputValue);
    }
    render() {
        return (
            <div className="column bg-white shadow-m border-radius-s border-m pt-m pb-m pl-m pr-m"
                style={{ width: 300,position:"absolute",right:'51rem',top:'20rem' }}>
                <form>
                    <label>
                        Add New Task:
                         <input type="text" value={this.state.value} onChange={this.handleChange} name="task" autoFocus autoComplete="false"/>
                    </label>
                    <div className="pt-l mt-l">
                    <CustomButton title="submit" disabled={!this.state.value} handler={this.state.value ? this.handleInputChange : this.showAlert}></CustomButton>
                    </div>
                </form>
            </div>
         );
    }
    showAlert() {
        alert('Fill The Field');
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
}

export default Dialog;