import React,{Component} from 'react';
import ToHeader from './head';
import ToFooter from './footer';
import ToList from './list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {name:"呵呵0",id:0,checked:true},
                {name:"呵呵1",id:1,checked:false}
            ],
            hash:'#/all'
        }
    }
    active = (ink) =>{
        this.setState({hash:ink})
    }
    changeChecked = (id) =>{
        let {arr} = this.state;
        arr.forEach(e=>{
            if(e.id == id){
                e.checked = !e.checked
            }
        })
        this.setState({arr})
    }
    
    add = (obj) => {
        let {arr} = this.state;
        arr.unshift(obj)
        this.setState({arr})
    }
    remove = (id) => {
        let {arr} = this.state;
        arr.forEach((e,i)=>{
            if(e.id == id){
                arr.splice(i,1)
            }
        })
        this.setState({arr})
    }
    checkedAll = (ev) => {
        let {checked} = ev.target;
        let {arr} = this.state;
        arr.forEach(e=>e.checked = checked)
        this.setState({arr})
    }
    render(){
        let {arr,hash} = this.state;
        let len = arr.length;
        let arr2 = [];
        arr.forEach(e=>{
            if(e.checked){
                len--;
            }
        })
        if(hash == '#/all'){
            arr2 = arr
        }
        if(hash == '#/active'){
            arr2 = arr.filter(e=>!e.checked)
        }
        if(hash == '#/completed'){
            arr2 = arr.filter(e=>e.checked)
        }

        let all = arr.every(e=>e.checked)
        let newArr = arr2.map((e,i)=>{
            return <ToList {...{
                key:i,
                txt:e.name,
                id:e.id,
                checked:e.checked,
                ccfn:this.changeChecked,
                rmfn:this.remove
            }}/>
        })
        return (
            <section className="todoapp">
                <div>
                    <ToHeader add={this.add}/>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox"
                            onClick = {this.checkedAll}
                            checked={all}
                        />
                        <ul className="todo-list">
                            {newArr}
                        </ul>
                    </section>
                    <ToFooter len={len} arr={arr} active={this.active}/>
                </div>
            </section>
        )
    }
}
 
export default App;