import { useNavigate, useRouteError } from "react-router-dom";

function RouteError() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <h1 className="text-3xl font-semibold text-red-600 mb-4">
        Something went wrong 😢
      </h1>
      <p className="text-gray-700 text-base mb-6">{error.error.message}</p>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default RouteError;
