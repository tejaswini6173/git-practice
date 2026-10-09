
export const initialForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

// Set this to your Django REST Framework API base URL.
// Example: http://127.0.0.1:8000/api/auth
const API_BASE_URL = "";

export function validateForm(form, mode) {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (mode === "signup" && !form.name.trim()) {
        errors.name = "Please enter your full name.";
    }

    if (!form.email.trim()) {
        errors.email = "Email address is required.";
    } else if (!emailPattern.test(form.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }

    if (mode !== "forgot") {
        if (!form.password) {
            errors.password = "Password is required.";
        } else if (mode === "signup" && form.password.length < 8) {
            errors.password = "Password must be at least 8 characters.";
        }

        if (
            mode === "signup" &&
            form.password !== form.confirmPassword
        ) {
            errors.confirmPassword = "Passwords do not match.";
        }
    }

    return errors;
}

export async function submitAuth({
    mode,
    name,
    email,
    password,
    rememberMe,
}) {
    const messages = {
        login: "Login successful!",
        signup: "Your account has been created successfully!",
        forgot:
            "If the account exists, password-reset instructions will be sent.",
    };

    // Frontend-only mode until the backend URL is configured.
    if (!API_BASE_URL) {
        return {
            type: "info",
            message:
                "Form validation passed. Configure the backend API to enable real authentication.",
        };
    }

    const endpoints = {
        login: "/login/",
        signup: "/register/",
        forgot: "/forgot-password/",
    };

    const payload =
        mode === "forgot"
            ? { email }
            : mode === "signup"
                ? { name, email, password }
                : { email, password, rememberMe };

    const response = await fetch(
        `${API_BASE_URL.replace(/\/$/, "")}${endpoints[mode]}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(payload),
        }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(
            data.detail ||
            data.message ||
            "Unable to complete your request."
        );
    }

    return {
        type: "success",
        message: data.message || messages[mode],
    };
}
