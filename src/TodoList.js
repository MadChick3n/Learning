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
                        onChange={this.handleInputChange}
                    />
                    <button>send</button>
                </div>
                <ul>
                    <li>learning react</li>
                    <li></li>
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        this.state.inputValue = e.target.value
    }
}

export default TodoList;