import React, { Component } from 'react';

class ListItem extends Component{
    onRemove(index){
        this.props.onRemove(index);
    }
    addToCart(index){
        this.props.addToCart(index);
    }
    onEdit(product){
        this.props.onEdit(product);
    }
    render(){
        const {product,index} = this.props;
        return(
            <li>
                <span>
                    {product.productName}
                    {product.price}
                </span>
                <button disabled={product.quantity ? true : false} onClick={this.addToCart.bind(this,index)}>{`Add to cart`}</button>
                <button onClick={this.onEdit.bind(this,product)}>{`Edit`}</button>
                <button onClick={this.onRemove.bind(this,index)}>{`Remove`}</button>
            </li>
        )
    }
}

export default class List extends Component {
  render() {
      const {products} = this.props;
    return (
      <div>
          <ul>
            {
                products.map((item,index)=>{
                    return(
                        <ListItem
                            key={index}
                            product={item}
                            index={index}
                            onRemove={this.props.onRemove}
                            addToCart={this.props.addToCart}
                            onEdit={this.props.onEdit}
                        />
                    )
                })
            }
          </ul>
      </div>
    );
  }
}