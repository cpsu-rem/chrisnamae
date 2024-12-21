
import { NavLink } from "react-router-dom";

const Home = () => {
 

  return (
    <div className="bg-gray-50 text-gray-800 pt-20">
  <section
  id="home"
  className="relative bg-cover bg-center text-white pb-20 px-6 h-[450px]"
  style={{ backgroundImage: 'url(https://i.pinimg.com/originals/2f/a0/6c/2fa06cf0c66fe6106e828d8cb732a885.jpg)' }} 
>
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-start h-full">
    <div className="max-w-xl text-center md:text-left mb-10 md:mb-0">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Discover Amazing Products
      </h1>
      <p className="text-lg mb-6">
        Explore a wide variety of high-quality products at unbeatable prices.
      </p>
      <button className="bg-white text-red-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition">
        <NavLink to="/products">Shop Now</NavLink>
      </button>
    </div>
  </div>
</section>
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Sign Up for Exclusive Deals
          </h2>
          <p className="text-lg mb-6">
            Join our mailing list and be the first to know about new arrivals
            and special offers.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300"
            />
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-100 hover:text-black transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:iveypasigay3@gmail.com"
                  className="hover:text-white"
                >
                  iveypasigay3@gmail.com
                </a>
              </p>
             
              <p>Address: San Carlos City, Negros Occidental</p>
            </div>

            <div className="text-left md:text-right">
              <h3 className="text-lg font-semibold text-white">
                About Our System
              </h3>
              <p className="mt-2">
                <strong>24/7 customer support</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
