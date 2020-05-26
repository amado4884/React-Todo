import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <form>
        <input type="text" name="item" id="item" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
        <input type="button" value="Add Item" onClick={() => { this.props.addItem({ task: this.state.text, id: Date.now(), completed: false }); this.setState({ text: "" }) }} />
        <input type="button" value="Clear Completed" onClick={this.props.clearCompleted} />
      </form>
    )
  }
}
