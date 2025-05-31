import Link from "next/link";

const NotFoundMessage = ({
  title = "Item Not Found",
  message = "Sorry, we couldn't find what you were looking for.",
  backLink = "/",
  backText = "Go Back",
  buttonColor = "bg-red-600 hover:bg-red-700",
}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">{title}</h1>
      <p className="text-gray-500 mb-8">{message}</p>
      <Link
        href={backLink}
        className={`px-6 py-3 text-white font-semibold rounded-lg shadow transition-colors ${buttonColor}`}
      >
        {backText}
      </Link>
    </div>
  );
};

export default NotFoundMessage;
