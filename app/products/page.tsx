import { brands } from "@/lib/data";

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Our Products</h1>
      {brands.map((brand) => (
        <div key={brand.id}>
          <h2 className="text-2xl font-semibold mt-6">{brand.name}</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {brand.products.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded"
                />
                <h3 className="text-lg font-medium mt-2">{product.name}</h3>
                <p className="text-gray-700">₹{product.price}</p>
                <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Contact for Inquiry
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
