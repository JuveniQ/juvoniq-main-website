
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const bounceKeyframes = `
@keyframes bounce {
  0%, 100% { transform: translateY(0);}
  20% { transform: translateY(-15px);}
  40% { transform: translateY(0);}
  60% { transform: translateY(-7px);}
  80% { transform: translateY(0);}
}
.bounce-animation {
  animation: bounce 1.5s infinite;
}
`;

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
      <style>{bounceKeyframes}</style>
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <span className="inline-flex bounce-animation rounded-full bg-white shadow-lg p-6">
            <AlertTriangle className="h-16 w-16 text-yellow-500 drop-shadow animate-pulse" />
          </span>
        </div>
        <h1 className="text-5xl font-black mb-4 text-primary animate-fade-in">404</h1>
        <p className="text-2xl text-gray-700 mb-4 font-semibold animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Oops! Page not found
        </p>
        <a href="/" className="inline-block mt-6 px-6 py-3 rounded-lg bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
