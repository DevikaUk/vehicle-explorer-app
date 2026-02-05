import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50 flex items-center justify-between px-6 z-50">
      
      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-blue-500">Home</Link>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="hover:text-blue-500"
        >
          Back
        </button>

        <Link to="/discover" className="hover:text-blue-500">Discover</Link>
      </div>
    </nav>
  );
};

export default Navbar;
