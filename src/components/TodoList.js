import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    return (
      <div className="list">
        <ul>
          {this.props.list.map(item => <TodoItem item={item} key={item.id} updateCompleted={this.props.updateCompleted} />)}
        </ul>
      </div>
    )
  }
}
