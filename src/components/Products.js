import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { getProducts } from '../actions/products';

class Products extends Component {
    componentDidMount() {
        const { fetched } = this.props;

        if (!fetched) {
            this.props.getProducts();
        }
    }

    render() {
        if(this.props) {
            return (
            <div> 
                <h1>Products Component</h1> 
                <ul>
                    Loading
                </ul>
            </div>    
            );
        } else {
            return (
            <div>    
            <h1>Products</h1>
            <ul>
                {this.props.products.products.data.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul> 
            </div>  
            );
        }
    }
}

const mapStateToProps = ({products}) => ({products});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProducts
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Products);