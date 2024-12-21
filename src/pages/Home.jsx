
import { NavLink } from "react-router-dom";

const Home = () => {
 

  return (
    <div className="bg-gray-50 text-gray-800 pt-28">
  <section

  className="relative bg-cover bg-center text-white pb-20 px-6 h-[650px]"
  style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.70f2ac309a3162c90ad739567b3c2ab1?rik=OPiZsRtqizq7qA&riu=http%3a%2f%2fmedia.timeout.com%2fimages%2f100514725%2fimage.jpg&ehk=a2M%2fGavGqto3HnXfv2Ul0klr%2fA8%2bDfj0PaQL2LthzL0%3d&risl=&pid=ImgRaw&r=0)' }} 
>
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-start h-full">
    <div className="max-w-xl text-center md:text-left mb-10 md:mb-0">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
  Shop the Latest in Women's and Men's Fashion
</h1>
<p className="text-lg mb-6">
  Discover trendy and stylish clothing for every occasion, with unbeatable prices and quality. Shop now and update your wardrobe with the latest fashion pieces for both women and men.
</p>

      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition">
        <NavLink to="/products">Shop Now</NavLink>
      </button>
    </div>
  </div>
</section>


<footer className="bg-gray-800 text-gray-300 py-8">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
    <div className="text-left md:text-left">
        <h3 className="text-lg font-semibold text-white">About Our System</h3>
        <p className="mt-2 text-gray-400">
          <strong>24/7 customer support</strong> – Always ready to assist you.
        </p>
      </div>
      <div className="text-left mb-6 md:mb-0">
        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
        <p className="mt-2 text-gray-400">
          Email:{" "}
          <a
            href="mailto:chrisnamae@gmail.com"
            className="hover:text-white transition"
          >
            chrisnamae@gmail.com
          </a>
        </p>
        <p className="mt-2 text-gray-400">Address: San Carlos City, Negros Occidental</p>
      </div>

     
    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;
