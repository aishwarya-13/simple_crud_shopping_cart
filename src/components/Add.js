import React, {Component} from 'react';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            price: ''
        }
    }

    shouldComponentUpdate(newProps,newState){
        let {productName,price} = this.state;
        let {itemTobeEdited} = newProps;
        if(newProps.itemTobeEdited == this.props.itemTobeEdited && newState.productName === productName && newState.price === price){
            return false;
        }
        return true;
    }

    componentWillUpdate(newProps){
        if(newProps.itemTobeEdited !== null && this.props.itemTobeEdited == null){
            this.setState({productName:newProps.itemTobeEdited.productName,price:newProps.itemTobeEdited.price})
        }
    }

    onAdd(event) {
        event.preventDefault();
        const {productName, price} = this.state;
        if(this.props.itemTobeEdited){
            this.props.updateProduct({productId:this.props.itemTobeEdited.productId, productName: productName, quantity:0, price: price})
        }
        else{
            this.props.onAdd({productName: productName, quantity:0, price: price});
        }        
        this.setState({productName: '', price: ''});

    }
    onChange(input, {target}) {
        this.setState({[input]: target.value});
    }
    render() {
        const {productName, price} = this.state;
        const {itemTobeEdited} = this.props;
        return (
            <div >
                <form
                    onSubmit={this
                    .onAdd
                    .bind(this)}>
                    <input
                        placeholder={`Product name`}
                        value={productName}
                        onChange={this
                        .onChange
                        .bind(this, 'productName')}/>
                    <input
                        placeholder={`Product price`}
                        value={price}
                        onChange={this
                        .onChange
                        .bind(this, 'price')}/>
                    <button type={'submit'} className={'btn btn-primary btn-block'}>{itemTobeEdited ? `Update`:`Add`}</button>
                </form>
            </div>
        );
    }
}