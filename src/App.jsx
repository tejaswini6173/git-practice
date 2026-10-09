
import React, { useState } from "react";

const App = () => {
  const [page, setPage] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (page === "login") {
      setMessage(
        "Login interface is ready. Connect your authentication API to sign in."
      );
    } else if (page === "register") {
      setMessage(
        "Registration interface is ready. Connect your backend to create an account."
      );
    } else {
      setMessage(
        "Password reset interface is ready. Connect your password recovery API."
      );
    }
  };

  const changePage = (nextPage) => {
    setPage(nextPage);
    setMessage("");
    setShowPassword(false);
  };

  return (
    <div className="travel-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Segoe UI", Arial, sans-serif;
        }

        button, input {
          font: inherit;
        }

        .travel-page {
          min-height: 100vh;
          min-height: 100dvh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 40px 8%;
          background-image:
            linear-gradient(
              90deg,
              rgba(12, 28, 30, 0.08),
              rgba(12, 28, 30, 0.03)
            ),
            url("/hero.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
        }

        .travel-logo {
          position: absolute;
          top: 42px;
          left: 4%;
          width: 205px;
          height: auto;
          object-fit: contain;
          z-index: 2;
        }

        .login-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 425px;
          padding: 38px 36px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(8px);
        }

        .eyebrow {
          color: #59816f;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .card-title {
          margin: 0 0 10px;
          color: #173b32;
          font-size: 30px;
          line-height: 1.25;
          font-weight: 700;
        }

        .card-description {
          margin: 0 0 28px;
          color: #777f7b;
          font-size: 14px;
          line-height: 1.7;
        }

        .form-group {
          margin-bottom: 19px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          color: #303b36;
          font-size: 13px;
          font-weight: 600;
        }

        .form-input {
          display: block;
          width: 100%;
          height: 48px;
          padding: 0 14px;
          border: 1px solid #dce4df;
          border-radius: 9px;
          outline: none;
          color: #24352d;
          background: #fff;
          font-size: 13px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-input::placeholder {
          color: #a1a8a4;
        }

        .form-input:focus {
          border-color: #59816f;
          box-shadow: 0 0 0 3px rgba(89, 129, 111, 0.12);
        }

        .password-container {
          display: flex;
          align-items: center;
          width: 100%;
          height: 48px;
          border: 1px solid #dce4df;
          border-radius: 9px;
          background: #fff;
          overflow: hidden;
        }

        .password-container:focus-within {
          border-color: #59816f;
          box-shadow: 0 0 0 3px rgba(89, 129, 111, 0.12);
        }

        .password-container .form-input {
          height: 46px;
          border: none;
          box-shadow: none;
          min-width: 0;
        }

        .show-password {
          border: none;
          background: transparent;
          color: #477661;
          padding: 10px 13px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .form-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 1px 0 23px;
        }

        .remember-label {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #68716b;
          font-size: 12px;
          cursor: pointer;
        }

        .remember-label input {
          accent-color: #477661;
        }

        .link-button {
          padding: 0;
          border: none;
          background: transparent;
          color: #477661;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .link-button:hover {
          color: #254e3c;
          text-decoration: underline;
        }

        .submit-button {
          width: 100%;
          height: 49px;
          border: none;
          border-radius: 9px;
          background: #477661;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }

        .submit-button:hover {
          background: #345e4b;
          transform: translateY(-1px);
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 24px 0 21px;
          color: #9ba39e;
          font-size: 11px;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #e7ebe8;
        }

        .bottom-text {
          margin: 0;
          text-align: center;
          color: #7a827d;
          font-size: 12px;
          line-height: 1.8;
        }

        .feedback-message {
          padding: 11px 12px;
          margin: 16px 0 0;
          border-radius: 8px;
          background: #edf5ef;
          color: #315b44;
          font-size: 12px;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        @media (max-width: 700px) {
          .travel-page {
            justify-content: center;
            padding: 125px 18px 28px;
            background-position: center;
          }

          .travel-logo {
            top: 24px;
            left: 22px;
            width: 155px;
          }

          .login-card {
            max-width: 440px;
            padding: 30px 24px;
          }

          .card-title {
            font-size: 26px;
          }
        }

        @media (max-width: 380px) {
          .login-card {
            padding: 26px 19px;
          }

          .form-options {
            align-items: flex-start;
          }
        }
      `}</style>

      <img
        className="travel-logo"
        src="/travelly-logo.png"
        alt="Travelly"
      />

      <section className="login-card">
        <div className="eyebrow">Discover the world</div>

        <h1 className="card-title">
          {page === "login" && "Welcome Back"}
          {page === "register" && "Create Account"}
          {page === "forgot" && "Forgot Password?"}
        </h1>

        <p className="card-description">
          {page === "login" &&
            "Sign in to continue your journey and discover beautiful destinations."}
          {page === "register" &&
            "Create your account and start planning your next adventure."}
          {page === "forgot" &&
            "Enter your registered email address to request a password reset."}
        </p>

        <form onSubmit={handleSubmit}>
          {page === "register" && (
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Full Name
              </label>
              <input
                className="form-input"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          {page !== "forgot" && (
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>

              <div className="password-container">
                <input
                  className="form-input"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete={
                    page === "login"
                      ? "current-password"
                      : "new-password"
                  }
                  minLength={6}
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          )}

          {page === "login" && (
            <div className="form-options">
              <label className="remember-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(event.target.checked)
                  }
                />
                Remember me
              </label>

              <button
                type="button"
                className="link-button"
                onClick={() => changePage("forgot")}
              >
                Forgot password?
              </button>
            </div>
          )}

          <button className="submit-button" type="submit">
            {page === "login" && "Sign In"}
            {page === "register" && "Create Account"}
            {page === "forgot" && "Send Reset Request"}
          </button>
        </form>

        {message && (
          <p className="feedback-message" role="status">
            {message}
          </p>
        )}

        <div className="divider">OR</div>

        {page === "login" ? (
          <p className="bottom-text">
            Don't have an account?{" "}
            <button
              type="button"
              className="link-button"
              onClick={() => changePage("register")}
            >
              Sign up
            </button>
          </p>
        ) : (
          <p className="bottom-text">
            Already have an account?{" "}
            <button
              type="button"
              className="link-button"
              onClick={() => changePage("login")}
            >
              Sign in
            </button>
          </p>
        )}
      </section>
    </div>
  );
};

export default App;
