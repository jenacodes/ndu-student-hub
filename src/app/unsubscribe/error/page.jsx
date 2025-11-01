export default function UnsubscribeError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-red-600">Something Went Wrong</h1>
      <p className="mt-4 text-gray-700">
        We couldn’t find your email or process your request. Please contact
        support@ndustudenthub.com if this continues.
      </p>
    </div>
  );
}
