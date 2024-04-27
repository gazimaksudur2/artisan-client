import { Link } from 'react-router-dom';
// import image from 'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711411200&semt=sph';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src='https://c4.wallpaperflare.com/wallpaper/839/927/713/404-fon-error-404-not-found-wallpaper-preview.jpg' alt="404 Illustration" className="w-[40%] mb-8" />
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go back to Home</Link>
    </div>
  );
};

export default NotFound;