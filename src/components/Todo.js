import React, { Component } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  clearCompleted = () => {
    const newList = this.state.list.filter(item => item.completed === false);
    this.updateStorage('list', newList);
  }

  addItem = (item) => {
    const newList = [...this.state.list, item];
    this.updateStorage('list', newList);
  }

  updateCompleted = (id, completed) => {
    const newList = this.state.list.map(item => {
      if (item.id === id)
        item.completed = completed;
      return item;
    });
    this.updateStorage('list', newList);
  }

  updateStorage = (token, value) => {
    this.setState({ list: value });
    localStorage.setItem(token, JSON.stringify(value));
  }

  getStorage = (token) => {
    const local = localStorage.getItem(token);
    if (local) {
      return JSON.parse(local);
    }
    return this.state.list;
  }

  componentDidMount() {
    this.setState({ list: this.getStorage('list') });
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
