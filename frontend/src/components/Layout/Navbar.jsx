import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setMenuOpen(false);
    logout();
    toast.success("You have been logged out. See you soon!");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link
          to={user ? "/dashboard" : "/"}
          className="nav-logo"
          onClick={() => setMenuOpen(false)}
        >
          LexAnalytica
        </Link>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-menu-wrapper ${menuOpen ? "active" : ""}`}>
          {user && (
            <div className="nav-links">
              {[
                { path: "/dashboard", label: "Dashboard" },
                { path: "/history", label: "History" },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link ${isActive(path) ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          <div className="nav-actions">
            {user ? (
              <>
                <div className="nav-profile">
                  <div className="nav-avatar">
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </div>
                  <span className="nav-username">
                    {user.name?.split(" ")[0]}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn btn-ghost logout-btn"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-ghost login-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary register-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
