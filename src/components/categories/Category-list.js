import React from 'react';
import {connect} from 'react-redux';
import CategoryItem from './Category-item';



class CategoryList extends React.Component {
  render() {

    const categories = this.props.categories.categories;
    console.log('categories are', categories)
    return (
      <div id="kanban">
        {
            categories.map(category =>
            <CategoryItem handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
              key={category.id} category={category}
            />)
        }
      </div>
    )
  }
}



export default CategoryList;
