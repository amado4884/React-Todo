import React, { Component } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: true
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
    this.updateCompleted = this.updateCompleted.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }
  clearCompleted() {
    const { list } = this.state;
    this.setState({ list: list.filter(item => item.completed === false) });
  }
  addItem(item) {
    const { list } = this.state;
    list.push(item);
    this.setState({ list });
  }
  updateCompleted(id, completed) {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id)
          item.completed = completed;
        return item;
      })
    })
  }
  render() {
    return (
      <div>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
        <TodoList list={this.state.list} updateCompleted={this.updateCompleted} />
      </div>
    )
  }
}
