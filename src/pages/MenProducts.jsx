import { useState, useEffect } from "react";

const MenProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section  className="py-16 px-6 pt-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Men's Clothing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.length === 0 ? (
            <p className="text-center text-gray-600">Loading products...</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg text-gray-800">${product.price}</span>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                      onClick={() => alert(`Added ${product.title} to cart`)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MenProducts;
