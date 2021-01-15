import React , { Component, Fragment } from 'react';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list : []
        }
    }

    render(){
        return(
            <Fragment>
                <div>
                    <input value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>send</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item , index) => {
                            return (
                                <li key={index} 
                                onClick={this.handleItemDelete.bind(this, index)}
                                >
                                    {item}
                                </li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    // react中要改數據要用setState
    handleInputChange(e){
        this.setState({
            inputValue : e.target.value
        })
    }

    handleBtnClick(){
        this.setState({
            list : [...this.state.list, this.state.inputValue],
            inputValue : ''
        })
    }

    handleItemDelete(index){
        // immutable
        // state不允許我們做任何改變
        // ...是展開運算符
        const list =  [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list : list
        })
    }
}

export default TodoList;