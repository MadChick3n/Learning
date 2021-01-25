import React , { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list : []
        }
        this.handleInputChange = this.handleInputChange.bind(this) ;
        this.handleBtnClick = this.handleBtnClick.bind(this) ;
    }

    render(){
        return(
            <Fragment>
                <div>
                
                {/* react裡面的label for用法改成htmlFor */}
                
                <label htmlFor="insertArea">Type in</label>
                    <input 
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>send</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
                
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index)=>{
            return(
            
                 <TodoItem 
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            
            )
        })
    }
    // react中要改數據要用setState
    handleInputChange(e){
        const value = e.target.value;
        this.setState(() => ({
           inputValue:value
            })
        )
        //  this.setState({
        //     inputValue : e.target.value
        // })
    }

    handleBtnClick(){
        this.setState((prevState) => ({
            list : [...prevState.list, prevState.inputValue],
            inputValue : ''
        }));
        
    }

    handleItemDelete(index){
        // immutable
        // state不允許我們做任何改變
        // ...是展開運算符
        this.setState((prevState) =>{
            const list =  [...prevState.list];
            list.splice(index, 1);
            return {list}
        });
        
    }
}

export default TodoList;