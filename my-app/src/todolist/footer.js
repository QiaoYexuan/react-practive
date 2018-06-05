import React,{Component} from 'react';

class ToFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hash:'#/all'
        }
    }
    click = (ev) => {
        let {active} = this.props;
        let {hash} = ev.target;
        active(hash)
        this.setState({hash})
    }
    render() { 
        let {len} = this.props;
        let {hash} = this.state;
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{len}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/all"
                            className={hash == '#/all'?'selected':''}
                            onClick={this.click}
                        >全部</a>
                    </li>
                    <li>
                        <a href="#/active" 
                            className={hash == '#/active'?'selected':''}
                            onClick={this.click}
                        >未完成</a>
                    </li>
                    <li>
                        <a href="#/completed"
                            className={hash == '#/completed'?'selected':''}
                            onClick={this.click}
                        >已完成</a>
                    </li>
                </ul>
            </footer>
        )
    }
}
 
export default ToFooter;