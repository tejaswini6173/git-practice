
import { useState } from "react";
import { validateLogin } from "./auth";

const styles = {
  page: {
    minHeight: "100vh",
    padding: "24px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #e1f4f3, #eaf0fa)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "1050px",
    minHeight: "620px",
    display: "flex",
    overflow: "hidden",
    borderRadius: "22px",
    background: "#ffffff",
    boxShadow: "0 24px 70px rgba(21, 55, 75, 0.16)",
  },
  left: {
    flex: "1",
    minWidth: 0,
    padding: "38px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#ffffff",
    backgroundImage:
      "linear-gradient(180deg, rgba(5,35,52,0.2), rgba(4,35,48,0.88)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  brand: {
    fontSize: "27px",
    fontWeight: "bold",
    letterSpacing: "-1px",
  },
  tagline: {
    fontSize: "12px",
    marginTop: "7px",
    letterSpacing: "1px",
  },
  travelText: {
    marginTop: "60px",
    marginBottom: "50px",
  },
  eyebrow: {
    color: "#9af0e1",
    fontSize: "11px",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  title: {
    fontSize: "clamp(34px, 4vw, 49px)",
    lineHeight: 1.13,
    margin: "20px 0",
    letterSpacing: "-1.5px",
  },
  description: {
    fontSize: "14px",
    lineHeight: 1.9,
    color: "#e6f0f3",
    maxWidth: "330px",
  },
  benefits: {
    display: "flex",
    gap: "25px",
    marginTop: "35px",
    flexWrap: "wrap",
  },
  benefit: {
    fontSize: "12px",
    lineHeight: 1.6,
  },
  right: {
    flex: "1",
    minWidth: 0,
    padding: "48px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  welcome: {
    color: "#07858b",
    fontSize: "11px",
    fontWeight: "bold",
    letterSpacing: "2px",
    margin: "0 0 12px",
  },
  heading: {
    color: "#172c3c",
    fontSize: "29px",
    margin: 0,
  },
  subtitle: {
    color: "#87939e",
    fontSize: "13px",
    lineHeight: 1.7,
    margin: "12px 0 30px",
  },
  label: {
    display: "block",
    color: "#2a3c4a",
    fontSize: "12px",
    fontWeight: "bold",
    marginBottom: "9px",
  },
  input: {
    width: "100%",
    minWidth: 0,
    padding: "14px",
    boxSizing: "border-box",
    border: "1px solid #dce5e9",
    borderRadius: "9px",
    fontSize: "13px",
    outlineColor: "#07858b",
    background: "#ffffff",
  },
  field: {
    marginBottom: "22px",
  },
  passwordBox: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    border: "1px solid #dce5e9",
    borderRadius: "9px",
    paddingRight: "10px",
  },
  passwordInput: {
    flex: 1,
    width: "0",
    minWidth: 0,
    padding: "14px",
    border: "none",
    outline: "none",
    fontSize: "13px",
    background: "transparent",
  },
  smallButton: {
    border: "none",
    background: "transparent",
    color: "#07858b",
    fontSize: "11px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "8px 3px",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
    margin: "0 0 25px",
    fontSize: "11px",
    color: "#566674",
  },
  remember: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },
  loginButton: {
    width: "100%",
    padding: "16px",
    border: "none",
    borderRadius: "9px",
    background: "#087f8c",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  message: {
    padding: "11px",
    marginTop: "14px",
    borderRadius: "8px",
    background: "#e7f7f2",
    color: "#17646c",
    fontSize: "12px",
    lineHeight: 1.6,
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    margin: "28px 0",
    color: "#929da6",
    fontSize: "11px",
  },
  line: {
    flex: 1,
    height: "1px",
    background: "#e6ebee",
  },
  socialRow: {
    display: "flex",
    gap: "12px",
  },
  socialButton: {
    flex: 1,
    padding: "13px 8px",
    border: "1px solid #dce5e9",
    borderRadius: "9px",
    background: "#ffffff",
    color: "#344656",
    fontSize: "12px",
    cursor: "pointer",
  },
  signup: {
    textAlign: "center",
    marginTop: "28px",
    color: "#7c8994",
    fontSize: "12px",
  },
  link: {
    border: "none",
    padding: 0,
    background: "transparent",
    color: "#087f8c",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "inherit",
  },
};

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [message, setMessage] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    const result = validateLogin(email, password);
    setMessage(result.message);
  }

  function showDemoMessage(text) {
    setMessage(text);
  }

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <div style={styles.left}>
          <div>
            <div style={styles.brand}>✈ Travelly</div>
            <div style={styles.tagline}>EXPLORE THE WORLD</div>
          </div>

          <div style={styles.travelText}>
            <span style={styles.eyebrow}>
              YOUR NEXT JOURNEY STARTS HERE
            </span>

            <h1 style={styles.title}>
              Discover
              <br />
              Your Next
              <br />
              Adventure
            </h1>

            <p style={styles.description}>
              Explore beautiful destinations, discover new
              cultures, and create unforgettable memories.
            </p>

            <div style={styles.benefits}>
              <div style={styles.benefit}>
                <div style={{ fontSize: "24px" }}>◎</div>
                Amazing
                <br />
                Destinations
              </div>

              <div style={styles.benefit}>
                <div style={{ fontSize: "24px" }}>♧</div>
                Best Travel
                <br />
                Deals
              </div>

              <div style={styles.benefit}>
                <div style={{ fontSize: "24px" }}>✓</div>
                Safe &amp; Easy
                <br />
                Booking
              </div>
            </div>
          </div>

          <p style={{ fontSize: "12px", color: "#e1eeee" }}>
            The world is waiting for you.
          </p>
        </div>

        <div style={styles.right}>
          <p style={styles.welcome}>WELCOME BACK</p>
          <h2 style={styles.heading}>Login to Travelly</h2>

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
                placeholder="Enter your email"
                autoComplete="email"
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

              <div style={styles.passwordBox}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  style={styles.passwordInput}
                  required
                />

                <button
                  type="button"
                  style={styles.smallButton}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div style={styles.options}>
              <label style={styles.remember}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />
                Remember me
              </label>

              <button
                type="button"
                style={styles.link}
                onClick={() =>
                  showDemoMessage("Password recovery is a demo feature.")
                }
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" style={styles.loginButton}>
              Login →
            </button>

            {message && (
              <div role="status" style={styles.message}>
                {message}
              </div>
            )}
          </form>

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
                showDemoMessage("Google login is not connected yet.")
              }
            >
              🌐 Google
            </button>

            <button
              type="button"
              style={styles.socialButton}
              onClick={() =>
                showDemoMessage("Facebook login is not connected yet.")
              }
            >
              f Facebook
            </button>
          </div>

          <p style={styles.signup}>
            Don't have an account?{" "}
            <button
              type="button"
              style={styles.link}
              onClick={() =>
                showDemoMessage("The sign-up page can be added next.")
              }
            >
              Sign up
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}
