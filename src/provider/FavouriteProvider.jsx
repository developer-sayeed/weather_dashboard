import { useLocalStorage } from "../hooks";
import { FavoriteContext } from "../context";

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  // Add Favourites
  const addToFavourite = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };
  // Remove Favourites
  const removeFromFavourite = (location) => {
    const restfavourites = favourites.filter((fav) => fav.location != location);
    setFavourites(restfavourites);
  };
  return (
    <FavoriteContext.Provider
      value={{ addToFavourite, removeFromFavourite, favourites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
