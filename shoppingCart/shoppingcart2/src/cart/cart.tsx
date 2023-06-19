import Button from '@mui/material/Button';

import { CartItemType } from '../App';


import { Wrapper } from './cart.styles';
import CartItem from '../CartItem/Cartitem';


type Props ={
    cartItems:CartItemType[];
    addToCart:(clickedItem:CartItemType)=>void;
    removeFromCart:(id:number)=>void;
}

const Cart:React.FC<Props> =({cartItems,addToCart,removeFromCart})=>{
    
    const calculateTotal=(items:CartItemType[])=>
       items.reduce((acc:number,item)=> acc+item.amount * item.price,0);
    

    return(
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length==0 ? <p>No itmes in cart</p> : null}
            {
                cartItems.map((item)=>{
                    return (
                        <CartItem
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        />
                    )
                })
            }
            <h2>Total:${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart