
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [message, setMessage] = useState("");

  const styles = {
    page: {
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "clamp(24px, 5vw, 76px)",
      gap: "32px",
      boxSizing: "border-box",
      fontFamily: "'Segoe UI', Arial, sans-serif",
      backgroundColor: "#153c4c",
      backgroundImage:
        "linear-gradient(90deg, rgba(4,25,39,.40), rgba(4,25,39,.04) 65%, rgba(4,25,39,.20)), url('/hero.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    left: {
      flex: "1 1 auto",
      minWidth: 0,
      maxWidth: "620px",
      color: "#fff",
      textShadow: "0 2px 10px rgba(0,0,0,.28)",
    },

    logo: {
      display: "block",
      width: "220px",
      maxWidth: "100%",
      height: "auto",
      objectFit: "contain",
      marginBottom: "44px",
      borderRadius: "4px",
      background: "#fff",
    },

    eyebrow: {
      color: "#9dfff0",
      fontSize: "11px",
      fontWeight: 800,
      letterSpacing: "2px",
      marginBottom: "18px",
    },

    heading: {
      fontSize: "clamp(38px, 4.2vw, 62px)",
      lineHeight: 1.08,
      letterSpacing: "-1.5px",
      margin: "0 0 22px",
      fontWeight: 800,
      color: "#fff",
    },

    description: {
      maxWidth: "400px",
      fontSize: "15px",
      lineHeight: 1.8,
      margin: 0,
      color: "#fff",
    },

    benefits: {
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      marginTop: "30px",
    },

    benefit: {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: 1.7,
      color: "#fff",
    },

    benefitIcon: {
      fontSize: "24px",
      marginBottom: "5px",
    },

    footer: {
      marginTop: "36px",
      fontSize: "12px",
      color: "#fff",
    },

    card: {
      flex: "0 0 410px",
      width: "410px",
      maxWidth: "100%",
      padding: "38px 36px",
      boxSizing: "border-box",
      borderRadius: "18px",
      background: "#ffffff",
      color: "#172b43",
      boxShadow: "0 22px 70px rgba(5, 28, 44, .30)",
      border: "1px solid rgba(255,255,255,.8)",
    },

    welcome: {
      color: "#078b9a",
      fontSize: "10px",
      fontWeight: 800,
      letterSpacing: "2.5px",
      marginBottom: "12px",
    },

    title: {
      fontSize: "28px",
      lineHeight: 1.25,
      fontWeight: 750,
      margin: "0 0 10px",
      color: "#172b43",
    },

    subtitle: {
      color: "#738196",
      fontSize: "13px",
      lineHeight: 1.6,
      margin: "0 0 30px",
    },

    field: {
      marginBottom: "22px",
    },

    label: {
      display: "block",
      fontSize: "12px",
      fontWeight: 700,
      color: "#26384c",
      marginBottom: "9px",
    },

    input: {
      display: "block",
      width: "100%",
      height: "46px",
      padding: "0 14px",
      border: "1px solid #d5dfeb",
      borderRadius: "8px",
      outlineColor: "#197f8b",
      fontSize: "13px",
      color: "#172b43",
      background: "#fff",
      transition: "border-color .2s, box-shadow .2s",
    },

    options: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "10px",
      fontSize: "11px",
      color: "#596b80",
      margin: "0 0 25px",
    },

    link: {
      border: 0,
      padding: 0,
      background: "transparent",
      color: "#087f91",
      fontSize: "11px",
      fontWeight: 700,
      cursor: "pointer",
    },

    loginButton: {
      width: "100%",
      height: "48px",
      border: 0,
      borderRadius: "8px",
      color: "#fff",
      background: "#197f8b",
      fontWeight: 700,
      fontSize: "14px",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(25,127,139,.15)",
    },

    divider: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "#8793a2",
      fontSize: "11px",
      margin: "26px 0",
      whiteSpace: "nowrap",
    },

    line: {
      flex: 1,
      height: "1px",
      background: "#e3e8ee",
    },

    socialRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
    },

    socialButton: {
      minWidth: 0,
      height: "43px",
      border: "1px solid #d6e0e9",
      borderRadius: "8px",
      background: "#fff",
      color: "#263b53",
      fontSize: "12px",
      fontWeight: 500,
      cursor: "pointer",
    },

    signup: {
      textAlign: "center",
      fontSize: "12px",
      color: "#738196",
      marginTop: "26px",
    },

    message: {
      color: "#087f91",
      fontSize: "12px",
      lineHeight: 1.5,
      marginTop: "12px",
    },
  };

  function handleLogin(event) {
    event.preventDefault();
    setMessage(
      "The login interface is ready. Connect your authentication API to sign in."
    );
  }

  return (
    <main className="travelly-page" style={styles.page}>
      {/* LEFT: Full-screen travel background with logo and content */}
      <section className="travelly-left" style={styles.left}>
        <img
          src="/travelly-logo.png"
          alt="Travelly - Explore the World"
          style={styles.logo}
        />

        <div style={styles.eyebrow}>
          YOUR NEXT JOURNEY STARTS HERE
        </div>

        <h1 style={styles.heading}>
          Discover
          <br />
          Your Next
          <br />
          Adventure
        </h1>

        <p style={styles.description}>
          Explore beautiful destinations, discover new cultures,
          and create unforgettable memories.
        </p>

        <div style={styles.benefits}>
          <div style={styles.benefit}>
            <div style={styles.benefitIcon}>◎</div>
            Amazing
            <br />
            Destinations
          </div>

          <div style={styles.benefit}>
            <div style={styles.benefitIcon}>♧</div>
            Best Travel
            <br />
            Deals
          </div>

          <div style={styles.benefit}>
            <div style={styles.benefitIcon}>✓</div>
            Safe &amp; Easy
            <br />
            Booking
          </div>
        </div>

        <p style={styles.footer}>
          The world is waiting for you.
        </p>
      </section>

      {/* RIGHT: Clear, accessible login card */}
      <section className="travelly-card" style={styles.card}>
        <div style={styles.welcome}>WELCOME BACK</div>

        <h2 style={styles.title}>Login to Travelly</h2>

        <p style={styles.subtitle}>
          Sign in to plan your next journey.
        </p>

        <form onSubmit={handleLogin}>
          <div style={styles.field}>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>

            <div style={{ position: "relative" }}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                style={{ ...styles.input, paddingRight: "60px" }}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                style={{
                  position: "absolute",
                  right: "13px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  border: 0,
                  background: "transparent",
                  color: "#087f91",
                  fontSize: "11px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div style={styles.options}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                cursor: "pointer",
              }}
            >
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
              style={styles.link}
              onClick={() =>
                setMessage("Password recovery is not connected yet.")
              }
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" style={styles.loginButton}>
            Login →
          </button>
        </form>

        {message && (
          <p role="status" style={styles.message}>
            {message}
          </p>
        )}

        <div style={styles.divider}>
          <span style={styles.line} />
          Or continue with
          <span style={styles.line} />
        </div>

        <div style={styles.socialRow}>
          <button
            type="button"
            style={styles.socialButton}
            onClick={() =>
              setMessage("Google login is not connected yet.")
            }
          >
            🌐 Google
          </button>

          <button
            type="button"
            style={styles.socialButton}
            onClick={() =>
              setMessage("Facebook login is not connected yet.")
            }
          >
            f Facebook
          </button>
        </div>

        <div style={styles.signup}>
          Don't have an account?{" "}
          <button
            type="button"
            style={styles.link}
            onClick={() =>
              setMessage("Sign-up is not connected yet.")
            }
          >
            Sign up
          </button>
        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body, #root {
          width: 100%;
          min-height: 100%;
          margin: 0;
        }

        body {
          margin: 0;
        }

        button, input {
          font-family: inherit;
        }

        input:focus {
          border-color: #197f8b !important;
          box-shadow: 0 0 0 3px rgba(25,127,139,.10);
        }

        button:focus-visible {
          outline: 3px solid rgba(25,127,139,.35);
          outline-offset: 3px;
        }

        button:hover {
          filter: brightness(.97);
        }

        @media (max-width: 900px) {
          .travelly-page {
            padding: 28px !important;
            gap: 24px !important;
          }

          .travelly-card {
            flex-basis: 380px !important;
            padding: 30px 26px !important;
          }

          .travelly-left {
            max-width: 48% !important;
          }
        }

        @media (max-width: 680px) {
          .travelly-page {
            min-height: 100vh;
            padding: 24px 16px !important;
            flex-direction: column;
            align-items: stretch !important;
            justify-content: center !important;
            background-position: center;
          }

          .travelly-left {
            max-width: none !important;
            width: 100% !important;
            padding: 10px 6px !important;
          }

          .travelly-left img {
            width: 180px !important;
            margin-bottom: 28px !important;
          }

          .travelly-card {
            flex: 0 0 auto !important;
            width: 100% !important;
            max-width: none !important;
            padding: 28px 22px !important;
          }
        }
      `}</style>
    </main>
  );
}
