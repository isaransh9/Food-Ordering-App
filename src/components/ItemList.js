import { useDispatch, useSelector } from "react-redux";
import { ITEM_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { items } = props;

  const dispatch = useDispatch();
  const cartItemIds = useSelector((store) => store.cart.ids);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
        >
          <div className="flex justify-between items-start">
            {/* Item Info (Name, Price, Description) */}
            <div className="flex-1 pr-4">
              <div className="flex justify-between">
                <span className="font-semibold text-lg">
                  {item.card.info.name}
                </span>
                <span className="font-semibold text-lg text-green-600">
                  ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>

              {/* Description aligned to the left */}
              <p className="text-sm text-gray-500 mt-2 text-left">
                {item.card.info.description}
              </p>
            </div>

            {/* Item Image with fixed height */}
            <div className="w-32 h-28 flex justify-center items-center">
              <img
                src={ITEM_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Add to Cart Button - Positioned on the left */}
          <div className="flex justify-between mt-4">
            {!cartItemIds.includes(item.card.info.id) ? (
              <button
                className="px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors"
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
            )}

            <button
              className={`px-4 py-2 font-semibold rounded-lg shadow-md transition-colors ${
                item.card.info.itemAttribute.vegClassifier === "VEG"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              } text-white`}
            >
              {item.card.info.itemAttribute.vegClassifier}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
