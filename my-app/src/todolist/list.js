import React,{Component} from 'react';
import App from './Index.js';

class ToList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    change = () => {
        let {id,ccfn} = this.props;
        ccfn(id)
    }
    click = () => {
        let {id,rmfn} = this.props;
        rmfn(id)
    }
    render() { 
        let {txt,id,checked} = this.props
        return (
            <li  className={checked?'completed':''}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox"
                        checked={checked}
                        onChange={this.change}
                    />
                    <label>{txt}</label>
                    <button 
                        className="destroy"
                        onClick={this.click}
                    ></button>
                </div>
                <input 
                    className="edit"
                /> 
            </li>
        )
    }
}
 
export default ToList;