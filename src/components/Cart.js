import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Get cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total price from cart items
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.card?.info?.price || 0); // Safely access the price
    }, 0);
  };

  const totalPrice = calculateTotal();

  return (
    <div className="text-center m-4 p-4">
      <div className="w-5/12 m-auto">
        {cartItems.length !== 0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        )}
        {cartItems.length === 0 && (
          <div className="p-4 m-4 mb-0">
            <h1>Your cart is empty</h1>
            <p>You can go to home page to view more restaurants</p>
            <img
              src="https://thumbs.dreamstime.com/b/icon-empty-cart-empty-empty-cart-330881055.jpg"
              alt="Empty Cart!!"
              className="w-xl h-xl"
            />
          </div>
        )}
        <ItemList items={cartItems} />
      </div>

      {/* Floating sidebar for total price */}
      {cartItems.length !== 0 && (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 w-64 bg-gray-800 text-white py-4 px-6">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold">Total Price</h2>
            <p className="text-lg">₹{(totalPrice / 100).toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
