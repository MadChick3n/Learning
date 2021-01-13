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
                            return <li key={index} onClick={this.handleItemDelete}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

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

    handleItemDelete(){
        this.setState({
            
        })
    }
}

export default TodoList;