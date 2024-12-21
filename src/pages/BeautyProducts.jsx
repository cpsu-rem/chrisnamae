import { useState, useEffect } from "react";

const BeautyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products/category/beauty");
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <section id="beauty-products" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Beauty Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.length === 0 ? (
            <p className="text-center text-gray-600">Loading beauty products...</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transform transition">
                <img
                  src={product.thumbnail} 
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-bold text-lg">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">${product.price}</span>
                 
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    onClick={() => alert(`Added ${product.title} to cart`)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BeautyProducts;
