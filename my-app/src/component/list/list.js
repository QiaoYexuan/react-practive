import React,{Component} from 'react';

class List extends Component {
    render() {
        let {arr} = this.props;
        let newArray = arr.map((e,i)=>{
            return <li key={i}>{e}</li>
        })
        return (
            <ul>{newArray}</ul>
        )
    }
}
 
export default List;