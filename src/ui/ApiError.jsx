import { useNavigate } from "react-router-dom";

function ApiError({ error = "An unexpected error occurred." }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Soory for inconvienience!
        </h1>
        <p className="text-gray-700 text-lg mb-6">{error.message}</p>

        <button
          onClick={() => navigate(-1)}
          className="inline-block px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
}

export default ApiError;
