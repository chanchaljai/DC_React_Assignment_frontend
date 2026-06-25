import useProducts from "../hooks/UseProducts";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const { data, isPending, isError, error } = useProducts();
  if (isPending) {
    return (
      <div className="p-6 text-center text-lg font-semibold">Loading...</div>
    );
  }
  if (isError) {
    return (
      <div className="p-6 text-center text-red-600">Error: {error.message}</div>
    );
  }
    const handleBack = () => {
    const role = localStorage.getItem("role");
    if (role === "admin") navigate("/dashboard/admin");
    else navigate("/dashboard/user");
  };

  return (
    <>
      <div className="flex justify-center gap-30 m-5">
        <h1 className="text-2xl font-bold text-center mt-2 ">TanStack Quary</h1>
        <button
          onClick={handleBack}
          className="bg-indigo-500 text-white hover:bg-indigo-600 rounded px-4 py-2 text-2xl"
        >
          Go To Dashboard
        </button>
      </div>

      <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mb-4 h-48 w-full object-contain"
            />
            <h2 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">
              {product.title}
            </h2>
            <p className="mb-4 line-clamp-3 text-sm text-gray-600">
              {product.description}
            </p>
            <p className="text-lg font-semibold text-green-600">
              Price: ${product.price}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
