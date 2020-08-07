import React, { Component } from 'react'

export default class TodoItem extends Component {

  check = e => {
    this.props.updateCompleted(this.props.item.id, !this.props.item.completed);
  }

  render() {
    return (
      <li key={this.props.item.id}>
        <input type="checkbox" name="completed" defaultChecked={this.props.item.completed} onChange={this.check} />
        <span className={`text ${this.props.item.completed ? "crossed" : ""}`}>{this.props.item.task}</span>
      </li>
    )
  }
}
