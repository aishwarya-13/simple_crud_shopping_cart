import React, { Component } from 'react';
import Add from './components/Add';
import List from './components/List';
import Cart from './components/Cart';
import './sass/style.scss';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products:[
        {productId: 1, productName: 'iPhone 7 plus', quantity: 0, price: 550000}
      ],
      itemTobeEdited:null
    }
  }

  onAdd(addedProduct){
    let products = this.state.products;
    addedProduct.productId = Math.floor(Math.random() * 100);
    products.push(addedProduct);
    this.setState({products:products});
  }

  onRemove(index){
    const products = this.state.products;
    products.splice(index,1);
    this.setState({products:products});
  }

  addToCart(pIndex){
    const products = this.state.products;
    const addedToCartProduct = products.find(function(item,index){
      if(pIndex === index){
        return item;
      }
    });
    addedToCartProduct.quantity += 1;
    this.setState({products:products});
  }
  
  changeQuantity(productId,operation){
    const {products} = this.state;
    const addedToCartProduct = products.find(function(item,index){
      if(productId === item.productId){
        return item;
      }
    });    
    if(operation === 'increase'){
      addedToCartProduct.quantity += 1;
    }
    if(operation === 'decrease'){
      addedToCartProduct.quantity -= 1;
    }
    this.setState({products:products});
  }

  onEdit(product){
    this.setState({itemTobeEdited:product});
  }

  updateProduct(product){
    let { products } = this.state;
    products = JSON.parse(JSON.stringify(products));
    products = products.map((item,index)=>{
      if(item.productId === product.productId){
        return product
      }
      return item;
    })
    this.setState({products:products,itemTobeEdited:null});
  }

  render() {
    const {products,itemTobeEdited} = this.state;
    return (
      <div className="App">
        <Add 
          onAdd={this.onAdd.bind(this)}
          itemTobeEdited={itemTobeEdited}
          updateProduct={this.updateProduct.bind(this)}/>
        <List 
          products={products}
          onRemove={this.onRemove.bind(this)}
          addToCart={this.addToCart.bind(this)}
          onEdit={this.onEdit.bind(this)}
        />
        <Cart className={{
          border: `1px solid black`
        }}
          products={products}
          changeQuantity={this.changeQuantity.bind(this)}
        />
      </div>
    );
  }
}

