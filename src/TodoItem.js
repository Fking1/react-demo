import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const { content} = this.props 
        return (
            <li onClick={this.handleClick}>
                {content}
            </li>
        )
    }

    handleClick() {
        const { handleDelete, index} = this.props
        handleDelete(index)
    }

}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    handleDelete: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem

// 子组件修改父组件的数据 可调用父组件传递的方法 进行间接修改