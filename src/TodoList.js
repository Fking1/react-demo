import React, { Component } from 'react';
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            list: [
                'react',
                'vue',
                'angular'
            ]
        }

        this.handleInputChange = this.handleInputChange.bind(this) //提升性能
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }


    render() {
        return (
            <div>
                <div>
                    <label htmlFor="input">输入内容</label>
                    <input
                        id="input"
                        className="input"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                <ul>{this.getTodoItem()}</ul>
            </div>
        )
    }

    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => {
            return {
                inputValue: value
            }
        })
        // this.setState({
        //     inputValue: e.target.value
        // })
    }

    handleSubmit() {
        // prevState代表修改之前的数据
        this.setState((prevState) => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        })
    }

    handleDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {
                list 
                // list: list 同名 可以省略key值
            }
        })
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    handleDelete={this.handleDelete}
                />
            )
        })
    }
}


export default TodoList

// 父组件向子组件传值 通过一个命名的属性传递  属性名可自行选取