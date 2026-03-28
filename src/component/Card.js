import { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ courses }) => {

  const [liked, setLiked] = useState(false);
  const [readMore, setReadMore] = useState(false);

  // ❤️ Toggle
  const handleLike = () => {
    setLiked((prev) => {
      if (prev) {
        toast.info("Removed from wishlist 🤍");
      } else {
        toast.success("Added to wishlist ❤️");
      }
      return !prev;
    });
  };

  // 📖 Read more toggle
  const description = readMore
    ? courses.description
    : courses.description.substring(0, 100) + "...";

  return (
    <div className="border p-2 flex flex-col h-full">

      {/* Image */}
      <div className="relative">
        <img 
          src={courses?.image?.url} 
          alt="course" 
          className="w-full h-40 object-cover"
        />

        {/* ❤️ Button */}
        <button
          onClick={handleLike}
          className=" absolute bottom-2 right-2 z-10
                     bg-white p-2 rounded-full shadow
                     hover:scale-110 active:scale-95 transition"
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Title */}
      <h3 className="font-bold line-clamp-2 mt-2">
        {courses.title}
      </h3>

      {/* Description */}
      <p className="text-sm mt-1">
        {description}

        <span
          onClick={() => setReadMore(!readMore)}
          className="text-blue-500 cursor-pointer ml-1"
        >
          {readMore ? " show less" : " read more"}
        </span>
      </p>

    </div>
  );
};

export default Card;