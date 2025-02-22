import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { title, itemCards } = props.data;
  const { setShowTitle, showItems } = props;

  // Controlling the showIndex state variable from this child component
  const handleClick = () => {
    setShowTitle();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
