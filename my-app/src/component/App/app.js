import React,{Component} from 'react';
import List from '../list/list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            val:''
        }
    }
    click = () => {
        let {arr,val} = this.state;
        if(!val){
            return
        }
        arr.push(val)
        val = '';
        this.setState({
            val,
            arr
        })
    }
    change = (ev) =>{
        let {value:val}= ev.target
        this.setState({val})
    }
    render() { 
        let {arr,val} = this.state;
        return (
            <div>
                <input 
                    type="text"
                    value={val}
                    onChange={this.change} 
                />
                <button
                    onClick={this.click}
                >按钮</button>
                <List arr={arr}/>
            </div>
        )
    }
}
 
export default App;