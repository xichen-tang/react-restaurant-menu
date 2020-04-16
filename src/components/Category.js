import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class Category extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  renderCategories() {
    return this.props.categories.map((category) => (
      <li key={category.id}>
        <Link to={`/categories/${category.short_name}/items`}>
          {category.name}
        </Link>
      </li>
    ));
  }
  render() {
    return (
      <div className="category">
        <ul>{this.renderCategories()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    categories: state.categories.categories,
  };
}

export default connect(mapStateToProps, actions)(Category);
