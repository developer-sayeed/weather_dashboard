import hearthIcon from "../../assets/heart.svg";
import hearthRedIcon from "../../assets/heart-red.svg";
import { useContext, useEffect, useState } from "react";
import { FavoriteContext, WeatherContext } from "../../context";

const AddToFavourite = () => {
  const { addToFavourite, removeFromFavourite, favourites } =
    useContext(FavoriteContext);

  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
  // State
  const [toggleFavorite, setToggleFavorite] = useState();
  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setToggleFavorite(found);
  }, [favourites, location]);

  // handle Favourites
  const handleFavorites = () => {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourite(latitude, longitude, location);
    } else {
      removeFromFavourite(location);
    }
    setToggleFavorite(!toggleFavorite);
  };
  return (
    <>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            onClick={handleFavorites}
            className="text-sm md:text-base cursor-pointer inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          >
            <span>
              {toggleFavorite ? "Remove to Favourite " : " Add to Favourite"}
            </span>
            <img src={toggleFavorite ? hearthRedIcon : hearthIcon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default AddToFavourite;
