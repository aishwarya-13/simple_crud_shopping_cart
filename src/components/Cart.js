import React, {Component} from 'react';
import Quantity from './Quantity';

class CartItem extends Component{
    render(){
        const {product} = this.props,
        {productId,productName,quantity,price} = product;
        return(
            <tr>
                <td>{productId}</td>
                <td>{productName}</td>
                <td>{price}</td>
                <Quantity 
                    quantity={quantity}
                    productId={productId}
                    changeQuantity={this.props.changeQuantity}
                />
                {/* <td>{quantity}</td> */}
            </tr>
        )
    }
}

export default class Cart extends Component {

    render() {
        let {products} = this.props;
        products = products.filter((p)=> { return p.quantity; });
        let total = 0;
        for(let item of products){
            total+= item.quantity * item.price;
        }
        return (
            <div >
                <table>
                    <thead>
                        <tr>
                            <th>{`Id`}</th>
                            <th>{`Product`}</th>
                            <th>{`Price`}</th>
                            <th>{`Quantity`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item,index)=>{
                                return (
                                    <CartItem
                                        key={index}
                                        product={item}
                                        changeQuantity={this.props.changeQuantity}
                                    />
                                )
                                
                            })
                        }
                    </tbody>
                </table>
                <div>
                    {'Total'}
                    {total}
                </div>
            </div>
        );
    }
}