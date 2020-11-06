import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Cart from '../components/Cart';
import * as Message from './../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actChangeMessage, actDeleteProductInCart, actUpdateProductInCart } from './../actions/index';
class CartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var {cart} = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalItem(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) =>{
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if(cart.length > 0){
            result = cart.map((item,index) =>{
                return (
                    <CartItem key={index} item={item} index={index} onDeleteProductInCart={this.props.onDeleteProductInCart} onChangeMessage={this.props.onChangeMessage} onUpdateProductInCart={this.props.onUpdateProductInCart}/>
                )
            })
        }
        return result;
    }

    showTotalItem = cart =>{
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

const mapStateToProps = state =>{
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        onDeleteProductInCart : (product) =>{
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart : (product, quantity) =>{
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
