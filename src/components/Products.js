import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { actAddToCart, actChangeMessage } from './../actions/index';
class Products extends React.Component {
    render() {
        var { products } = this.props;

        return (
            <section className="section">
              <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
              <div className="row">
                {/* Product */}
                { this.showProducts(products) }
                </div>
            </section>
        );
    }

    showProducts(products){
        var result = null;
        var {onAddToCart, onChangeMessage} = this.props;
        if(products.length > 0){
            result = products.map((product, index) =>{
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
            })
        }
        return result;
    }
}
const mapStateToProps = state =>{
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        onAddToCart : (product) =>{
            dispatch(actAddToCart(product,1));
        },
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
