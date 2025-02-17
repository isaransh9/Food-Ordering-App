import { RES_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName } =
    props?.resData?.info;

  return (
    <div className="m-4 p-4 w-full md:w-[300px] rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 relative bg-gray-50 flex flex-col min-h-[400px]">
      {/* Restaurant Image */}
      <img
        className="w-full h-48 rounded-lg object-cover mb-4"
        src={RES_URL + cloudinaryImageId}
        alt="res-logo"
      />

      {/* Restaurant Details */}
      <h3 className="font-bold text-gray-800 mb-2">{name}</h3>
      <h4 className="text-sm text-gray-600 py-1">{areaName}</h4>

      {/* Cuisines Section */}
      <div className="text-sm text-gray-600 py-1 overflow-hidden">
        <h4 className="line-clamp-2">{cuisines.join(", ")}</h4>
      </div>

      {/* Rating Section */}
      <div className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSokvLLBOHLxXQqxAnbEb5VEQKK8rzhSNwXrT-Tgkur0eYfaqPfr_U1ErWRGtwT1e-SnLE&usqp=CAU"
          alt="Error loading Image"
          className="w-5 my-1 mr-2"
        />
        <h4 className="text-sm text-gray-600 py-1">{avgRating}</h4>
      </div>

      {/* Cost and Delivery */}
      <h4 className="text-sm text-gray-600 py-1">{costForTwo}</h4>
      <h4 className="text-sm text-gray-600 py-1 font-bold">
        {props?.resData?.info?.sla?.deliveryTime} mins
      </h4>
    </div>
  );
};

// Higher Order Component for "Open" label
export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-semibold z-10">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
