import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Item extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.category !== this.props.match.params.category) {
      this.props.fetchItems(nextProps.match.params.category);
    }
  }
  renderItems() {
    return this.props.items.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.description}</td>
      </tr>
    ));
  }
  render() {
    return (
      <div className="category">
        <h2>Items in Category: ({this.props.match.params.category})</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{this.renderItems()}</tbody>
        </table>
        <ul>{this.renderCategory}</ul>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    items: state.items.items[props.match.params.category] || [],
  };
}

export default connect(mapStateToProps, actions)(Item);
