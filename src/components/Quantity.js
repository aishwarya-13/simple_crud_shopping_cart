import React, {Component} from 'react';

export default class Quantity extends Component {

    changeQuantity(operation){
        this.props.changeQuantity(this.props.productId,operation);
    }

    render() {
        const{quantity} = this.props;
        return (
            <div >
                <button onClick={this.changeQuantity.bind(this,'increase')}>+</button>
                    {quantity}
                <button onClick={this.changeQuantity.bind(this,'decrease')}>-</button>
            </div>
        );
    }
}