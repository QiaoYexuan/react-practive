import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            arr:[],
            num:0,
            value:''
        }
    }
    click = (ev) =>{
        let {arr,value} = this.state;
        if(!value){
            return
        }
        arr.push(value)
        value = ''
        this.setState({value})
    }
    change = (ev) =>{
        let {value} = ev.target;
        this.setState({value})
    }
    render(){
        let {arr,value} = this.state;
        let newArr = arr.map((e,i)=>{
           return <li key={i}>{e}</li>
        })
        return(
            <div>
                <input 
                    type = "text"
                    value = {value}
                    onChange={this.change}
                />
                <button 
                    onClick = {this.click}
                >按钮</button>
                <ul>{newArr}</ul>
            </div>
        );
    }
}
// let arr = [1,2,3,4,5,6];
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
if(module.hot){
    module.hot.accept();
}