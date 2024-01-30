import { useContext, useState } from "react";
import { getImageUrl } from "../utils/cine-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { CartContext } from "../contexts";
import tagImg from '../assets/tag.svg'

export default function MovieCard({ movie }) {
  const [isShow, setIsShow] = useState(false);

  const { cartData, setCartData } = useContext(CartContext);

  function handleCancelModal() {
    setIsShow(false);
  }

  function handleAddToCart(event, movie) {
   event.stopPropagation();
   const isAvailable = cartData.find(item => item.id === movie.id);
   if(isAvailable){
    alert(`${movie.title} is added to cart before.`);
   }else{
    setCartData([...cartData, movie]);
   }

  }
  return (
    <>
      {isShow && (
        <MovieDetailsModal movie={movie} onCancelModal={handleCancelModal} onAddToCart={handleAddToCart}/>
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a
          onClick={() => {
            setIsShow(true);
          }}
          href="#"
        >
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.description}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e,movie)}
            >
              <img src={tagImg} alt="" />
              <span >
                $ {movie.price} | Add to Cart
              </span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
