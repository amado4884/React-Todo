import React, { Component } from 'react'

export default class TodoItem extends Component {

  render() {
    return (
      <li key={this.props.item.id}> <input type="checkbox" name="completed" defaultChecked={this.props.item.completed} onChange={(e) => {
        this.props.updateCompleted(this.props.item.id, !this.props.item.completed);
      }} /> {this.props.item.task}</li>
    )
  }
}
