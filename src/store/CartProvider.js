import CartContext from "./cart-context";

const CartProvider = props => {

    const addItemCartHandeler = () => { };
 
    const removeCartItemHandeler = (id) => { };
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem:addItemCartHandeler ,
        removeItem: removeCartItemHandeler
    };
    
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};
export default CartProvider;