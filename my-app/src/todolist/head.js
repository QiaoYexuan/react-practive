import React,{Component} from 'react';

class ToHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val:''
        }
    }

    change = (ev) => {
        let {value:val} = ev.target;
        this.setState({
            val
        })
    }

    keyup = (ev) => {
        if(ev.keyCode === 13){
            let {add} = this.props;
            let {val} = this.state;
            let obj = {
                name:val,
                id:+new Date,
                checked:false,
            }
        add(obj)
        val = ''
        this.setState({val})
        }
    }

    render() {
        let {val} = this.state;
        return (
            <header className="header" >
                <h1>todos</h1>
                <input 
                    className="new-todo" 
                    placeholder="请输入内容" 
                    value={val}
                    onChange = {this.change}
                    onKeyUp={this.keyup}
                />
            </header>
        )
    }
}
 
export default ToHeader;